import type { Point, Rect } from './wrap-geometry.ts'

// Generates a realistic PQRST waveform and provides:
// - Canvas drawing
// - Bounding polygon for Pretext obstacle avoidance
// - Click-to-randomize interaction

export type WaveformState = {
  points: Point[]       // normalized waveform path points (0..1 range)
  rect: Rect            // absolute position on page
  hullPoints: Point[]   // absolute polygon hull for obstacle avoidance
  canvas: HTMLCanvasElement
  seed: number
}

// PQRST waveform generation using parametric Gaussian-like bumps
function generatePQRST(seed: number): number[] {
  const samples = 200
  const result: number[] = new Array(samples)

  // Seeded random for reproducibility
  let s = seed
  function rand(): number {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 4294967296
  }

  // Variation parameters
  const heartRate = 0.7 + rand() * 0.6  // affects spacing
  const pAmp = 0.08 + rand() * 0.06
  const qAmp = -(0.05 + rand() * 0.04)
  const rAmp = 0.7 + rand() * 0.3
  const sAmp = -(0.1 + rand() * 0.08)
  const tAmp = 0.15 + rand() * 0.12

  function gaussian(x: number, center: number, width: number, amplitude: number): number {
    const d = (x - center) / width
    return amplitude * Math.exp(-d * d * 0.5)
  }

  for (let i = 0; i < samples; i++) {
    const t = i / samples

    // Two beats visible
    let v = 0
    for (let beat = 0; beat < 3; beat++) {
      const offset = beat * 0.4 * heartRate
      const x = t - offset

      // P wave
      v += gaussian(x, 0.1, 0.025, pAmp)
      // Q wave
      v += gaussian(x, 0.17, 0.012, qAmp)
      // R wave (sharp peak)
      v += gaussian(x, 0.2, 0.015, rAmp)
      // S wave
      v += gaussian(x, 0.23, 0.012, sAmp)
      // T wave
      v += gaussian(x, 0.32, 0.035, tAmp)
    }

    // Add tiny noise
    v += (rand() - 0.5) * 0.01

    result[i] = v
  }

  return result
}

function waveformToPoints(samples: number[]): Point[] {
  return samples.map((v, i) => ({
    x: i / (samples.length - 1),
    y: 0.5 - v * 0.45, // flip and scale to 0..1
  }))
}

function computeHull(points: Point[], rect: Rect, padding: number): Point[] {
  // Simple bounding hull: top and bottom envelope with padding
  const steps = 20
  const top: Point[] = []
  const bottom: Point[] = []

  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const x = rect.x + t * rect.width

    // Find min/max y in this slice
    const sliceStart = Math.floor(t * (points.length - 1) - points.length * 0.05)
    const sliceEnd = Math.ceil(t * (points.length - 1) + points.length * 0.05)
    let minY = 1, maxY = 0

    for (let j = Math.max(0, sliceStart); j <= Math.min(points.length - 1, sliceEnd); j++) {
      const py = points[j]!.y
      if (py < minY) minY = py
      if (py > maxY) maxY = py
    }

    top.push({ x, y: rect.y + minY * rect.height - padding })
    bottom.push({ x, y: rect.y + maxY * rect.height + padding })
  }

  // Close the polygon: top left-to-right, bottom right-to-left
  return [...top, ...bottom.reverse()]
}

export function createWaveform(seed: number): WaveformState {
  const canvas = document.createElement('canvas')
  canvas.className = 'ecg-canvas'
  canvas.style.position = 'absolute'
  canvas.style.pointerEvents = 'auto'
  canvas.style.cursor = 'pointer'

  const samples = generatePQRST(seed)
  const points = waveformToPoints(samples)

  return {
    points,
    rect: { x: 0, y: 0, width: 0, height: 0 },
    hullPoints: [],
    canvas,
    seed,
  }
}

export function updateWaveformRect(state: WaveformState, rect: Rect, padding: number): void {
  state.rect = rect
  state.hullPoints = computeHull(state.points, rect, padding)

  const dpr = window.devicePixelRatio || 1
  state.canvas.width = Math.ceil(rect.width * dpr)
  state.canvas.height = Math.ceil(rect.height * dpr)
  state.canvas.style.left = `${rect.x}px`
  state.canvas.style.top = `${rect.y}px`
  state.canvas.style.width = `${rect.width}px`
  state.canvas.style.height = `${rect.height}px`
}

export function drawWaveform(state: WaveformState, color: string): void {
  const { canvas, points, rect } = state
  const dpr = window.devicePixelRatio || 1
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.save()
  ctx.scale(dpr, dpr)

  // Draw grid lines (subtle)
  ctx.strokeStyle = color
  ctx.globalAlpha = 0.08
  ctx.lineWidth = 0.5
  const gridSpacing = 20
  for (let x = 0; x < rect.width; x += gridSpacing) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, rect.height)
    ctx.stroke()
  }
  for (let y = 0; y < rect.height; y += gridSpacing) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(rect.width, y)
    ctx.stroke()
  }

  // Draw waveform
  ctx.globalAlpha = 0.7
  ctx.strokeStyle = color
  ctx.lineWidth = 2
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.beginPath()

  for (let i = 0; i < points.length; i++) {
    const px = points[i]!.x * rect.width
    const py = points[i]!.y * rect.height
    if (i === 0) ctx.moveTo(px, py)
    else ctx.lineTo(px, py)
  }
  ctx.stroke()

  // Draw a second pass slightly offset for glow effect
  ctx.globalAlpha = 0.15
  ctx.lineWidth = 6
  ctx.stroke()

  ctx.restore()
}

export function randomizeWaveform(state: WaveformState): void {
  state.seed = Date.now()
  const samples = generatePQRST(state.seed)
  state.points = waveformToPoints(samples)
}

export function isPointInWaveformArea(state: WaveformState, x: number, y: number): boolean {
  const { rect } = state
  return x >= rect.x && x <= rect.x + rect.width &&
         y >= rect.y && y <= rect.y + rect.height
}
