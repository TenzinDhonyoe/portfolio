// ECG engine — sweep cursor mode with variable BPM

export type ECGState = {
  canvas: HTMLCanvasElement
  samples: number[]
  sweepX: number
  bpm: number          // current heart rate (drives sweep speed)
  targetBpm: number    // target BPM (smoothly interpolated)
  seed: number
  flatline: boolean
  flatlineEnd: number
}

function gaussian(x: number, c: number, w: number, a: number): number {
  const d = (x - c) / w
  return a * Math.exp(-d * d * 0.5)
}

function generatePQRST(seed: number): number[] {
  const ppb = 200
  const beats = 6
  const n = ppb * beats
  const out: number[] = new Array(n)
  let s = seed
  const rng = () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 4294967296 }
  for (let b = 0; b < beats; b++) {
    const rA = 0.7 + rng() * 0.3
    const tA = 0.12 + rng() * 0.1
    const pA = 0.06 + rng() * 0.06
    for (let i = 0; i < ppb; i++) {
      const t = i / ppb
      out[b * ppb + i] =
        gaussian(t, 0.10, 0.025, pA) +
        gaussian(t, 0.17, 0.012, -0.05) +
        gaussian(t, 0.20, 0.015, rA) +
        gaussian(t, 0.23, 0.012, -0.10) +
        gaussian(t, 0.32, 0.035, tA) +
        (rng() - 0.5) * 0.008
      }
  }
  return out
}

export function createECG(canvas: HTMLCanvasElement, seed: number = 42): ECGState {
  return {
    canvas,
    samples: generatePQRST(seed),
    sweepX: 0,
    bpm: 72,
    targetBpm: 72,
    seed,
    flatline: false,
    flatlineEnd: 0,
  }
}

export function setBPM(state: ECGState, bpm: number): void {
  state.targetBpm = Math.max(40, Math.min(180, bpm))
}

export function randomize(state: ECGState): void {
  state.seed = Date.now()
  state.samples = generatePQRST(state.seed)
}

export function shock(state: ECGState): void {
  state.flatline = true
  state.flatlineEnd = performance.now() + 300
  setTimeout(() => {
    state.flatline = false
    randomize(state)
  }, 300)
}

export function drawECG(state: ECGState, dt: number, color: string, warnColor: string): void {
  const { canvas, samples } = state
  const dpr = window.devicePixelRatio || 1
  const w = canvas.clientWidth
  const h = canvas.clientHeight
  if (w <= 0 || h <= 0) return

  const cw = Math.ceil(w * dpr)
  const ch = Math.ceil(h * dpr)
  if (canvas.width !== cw || canvas.height !== ch) {
    canvas.width = cw
    canvas.height = ch
  }

  // Smooth BPM interpolation
  state.bpm += (state.targetBpm - state.bpm) * Math.min(1, dt * 4)

  // Sweep speed: pixels per second based on BPM
  // At 72bpm with 6 beats in samples, one beat = 200 samples
  // We want the visual beat spacing to reflect BPM
  const beatsPerSec = state.bpm / 60
  const pixelsPerBeat = w / 4 // show ~4 beats on screen
  const speed = beatsPerSec * pixelsPerBeat

  state.sweepX = (state.sweepX + speed * dt) % w

  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, cw, ch)
  ctx.save()
  ctx.scale(dpr, dpr)

  const sLen = samples.length
  const cy = h * 0.5
  const amp = h * 0.35

  // Color lerp based on BPM (green → orange at high BPM)
  const bpmT = Math.max(0, Math.min(1, (state.bpm - 72) / 68))
  const traceColor = bpmT > 0.01 ? lerpColor(color, warnColor, bpmT) : color

  const getY = (px: number): number => {
    if (state.flatline) return cy
    const i = Math.floor((px / w) * sLen) % sLen
    return cy - (samples[i < 0 ? i + sLen : i] ?? 0) * amp
  }

  // Draw sweep trail
  const gapW = w * 0.06
  const { sweepX } = state

  // Faded trail behind sweep
  for (let px = 0; px < w; px++) {
    const age = ((sweepX - px + w) % w)
    if (age < gapW) continue // gap ahead

    let alpha: number
    if (age < w * 0.7) {
      alpha = 0.5 * (1 - age / (w * 0.7))
    } else {
      alpha = 0.02
    }

    // Batch into segments of 4px for performance
    if (px % 4 !== 0) continue
    const segEnd = Math.min(px + 4, w)

    ctx.globalAlpha = alpha
    ctx.strokeStyle = traceColor
    ctx.lineWidth = 2
    ctx.lineJoin = 'round'
    ctx.beginPath()
    for (let x = px; x <= segEnd; x++) {
      x === px ? ctx.moveTo(x, getY(x)) : ctx.lineTo(x, getY(x))
    }
    ctx.stroke()
  }

  // Bright leading edge (last few pixels before sweep)
  const leadLen = 12
  ctx.globalAlpha = 0.7
  ctx.strokeStyle = traceColor
  ctx.lineWidth = 2.5
  ctx.shadowColor = traceColor
  ctx.shadowBlur = 8
  ctx.beginPath()
  for (let px = Math.max(0, sweepX - leadLen); px <= sweepX; px++) {
    const x = ((px % w) + w) % w
    px === Math.max(0, sweepX - leadLen) ? ctx.moveTo(x, getY(x)) : ctx.lineTo(x, getY(x))
  }
  ctx.stroke()
  ctx.shadowBlur = 0

  // Glow dot
  const dx = ((sweepX % w) + w) % w
  const dy = getY(dx)
  ctx.fillStyle = traceColor
  ctx.globalAlpha = 1
  ctx.beginPath()
  ctx.arc(dx, dy, 3, 0, Math.PI * 2)
  ctx.fill()
  ctx.globalAlpha = 0.3
  ctx.beginPath()
  ctx.arc(dx, dy, 8, 0, Math.PI * 2)
  ctx.fill()

  ctx.restore()
}

function lerpColor(a: string, b: string, t: number): string {
  const pa = parseHex(a), pb = parseHex(b)
  const r = Math.round(pa.r + (pb.r - pa.r) * t)
  const g = Math.round(pa.g + (pb.g - pa.g) * t)
  const bl = Math.round(pa.b + (pb.b - pa.b) * t)
  return `rgb(${r},${g},${bl})`
}

function parseHex(hex: string): { r: number; g: number; b: number } {
  const c = hex.replace('#', '')
  return {
    r: parseInt(c.substring(0, 2), 16),
    g: parseInt(c.substring(2, 4), 16),
    b: parseInt(c.substring(4, 6), 16),
  }
}
