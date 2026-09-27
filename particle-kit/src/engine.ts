// The particle stage: dots in 3D, perspective-projected onto a 2D canvas,
// fading with depth, leaning toward the cursor and scattering from it, on an
// optional endless floor. A Scene writes where every dot is for a moment in
// time; the stage handles the camera, the pointer, drawing, theme and
// pausing. Plain canvas 2D, no dependencies.

import { isDark, onThemeChange, type ThemedPalette } from './theme.ts'
import { clamp01, smooth } from './rng.ts'

/** Per-dot state a scene writes each frame. Units: roughly -1..1. */
export type Buffers = {
  x: Float32Array
  y: Float32Array // y points down, like the screen
  z: Float32Array // z points away from the viewer
  /** Palette index. */
  c: Uint8Array
  /** Base opacity 0–1 (0 hides the dot). */
  a: Float32Array
  /** Base size in px at unit depth. */
  s: Float32Array
  /** Optional surface normals: dots facing away fall back, so shapes read solid. */
  nx?: Float32Array
  ny?: Float32Array
  nz?: Float32Array
  /** Optional: 1 for dots that glow (a soft halo in the accent colour). */
  glow?: Uint8Array
}

export type FrameInfo = {
  /** Seconds since mount (a fixed still under reduced motion). */
  t: number
  w: number
  h: number
  dark: boolean
  palette: readonly string[]
  /** Where the scene's origin and unit radius land on screen. */
  cx: number
  cy: number
  radius: number
}

export type Scene = {
  count: number
  /** Write every dot for time `t`. `first` is true on the first call only. */
  frame: (t: number, b: Buffers, first: boolean, info: FrameInfo) => void
  /** Turns per second about the vertical axis. Default 0. */
  spin?: number
  /** Resting pitch toward the viewer (radians). Default 0. */
  pitch?: number
  /** How far the pointer can turn the scene (radians). Default 0.35. */
  lean?: number
  /** Scene radius in px (default: 38% of the short side). */
  radius?: (w: number, h: number) => number
  /** Scene origin in px (default: the canvas centre). */
  center?: (w: number, h: number) => [number, number]
  /** The time to hold under reduced motion. Default 0. */
  still?: number
  /** Draw extra things over the dots (labels, frames). */
  overlay?: (ctx: CanvasRenderingContext2D, info: FrameInfo) => void
}

export type StageOptions = {
  palette: ThemedPalette
  /** Track the pointer over this element instead of just the canvas. */
  pointerArea?: HTMLElement
  /** Pixels around the pointer that dots scatter from. Default 90. */
  repelRadius?: number
  /** Opacity of the farthest dots (0–1). Default 0.2. */
  depthFloor?: number
  /** Palette index used for glow halos. Default 0. */
  glowColor?: number
  /** Draw an endless perspective floor. `glide` (0–1+) slides it toward you. */
  floor?: { horizon?: number; glide?: () => number }
  /** Redraw on scroll even when paused (for scroll-driven scenes). */
  redrawOnScroll?: boolean
}

const PERSPECTIVE = 3.4

function dotSprite(color: string) {
  const s = document.createElement('canvas')
  s.width = s.height = 32
  const c = s.getContext('2d')!
  c.fillStyle = color
  c.beginPath()
  c.arc(16, 16, 16, 0, Math.PI * 2)
  c.fill()
  return s
}

function glowSprite(color: string) {
  const s = document.createElement('canvas')
  s.width = s.height = 64
  const c = s.getContext('2d')!
  const g = c.createRadialGradient(32, 32, 0, 32, 32, 32)
  // Colour stops need rgba; draw the colour at decreasing opacity.
  g.addColorStop(0, color)
  g.addColorStop(1, 'transparent')
  c.globalAlpha = 0.5
  c.fillStyle = g
  c.fillRect(0, 0, 64, 64)
  return s
}

/** How much a dot shows, from its normal's z after rotation (viewer looks along +z). */
export function faceShade(nz: number) {
  const facing = -nz
  return facing > 0 ? 0.4 + 0.6 * Math.pow(facing, 0.6) : 0.4 + 0.28 * facing
}

/**
 * Mount a scene on a canvas. The canvas should be sized by CSS; the stage
 * handles pixel ratio. Returns controls to redraw or tear down.
 */
export function mountStage(canvas: HTMLCanvasElement, scene: Scene, opts: StageOptions) {
  const ctx = canvas.getContext('2d')!
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const n = scene.count
  const b: Buffers = {
    x: new Float32Array(n),
    y: new Float32Array(n),
    z: new Float32Array(n),
    c: new Uint8Array(n),
    a: new Float32Array(n).fill(1),
    s: new Float32Array(n).fill(1.8),
  }
  const R = opts.repelRadius ?? 90
  const depthFloor = opts.depthFloor ?? 0.2
  const off = new Float32Array(n * 2)
  const vel = new Float32Array(n * 2)

  let dark = isDark()
  let palette = dark ? opts.palette.dark : opts.palette.light
  let sprites = palette.map(dotSprite)
  let halo = glowSprite(palette[opts.glowColor ?? 0])

  let w = 0
  let h = 0
  let first = true
  let raf = 0
  let running = false
  let mx = -1e5
  let my = -1e5
  let leanX = 0
  let leanY = 0
  let wantX = 0
  let wantY = 0
  const t0 = performance.now()

  const resize = () => {
    const rect = canvas.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    w = rect.width
    h = rect.height
    canvas.width = Math.round(w * dpr)
    canvas.height = Math.round(h * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  // An endless floor: horizontal lines crowding toward the horizon and rays
  // converging on it, both fading out as they recede. No fill, so it never
  // seams against the page.
  const drawFloor = (cx: number) => {
    const horizon = h * (opts.floor?.horizon ?? 0.68)
    const depth = h - horizon
    const ink = dark ? '241,240,236' : '22,22,22'
    const glide = ((opts.floor?.glide?.() ?? 0) * 2.4) % 1
    ctx.lineWidth = 1
    for (let j = 0; j < 22; j++) {
      const z = 1 + (j + 1 - glide) * 0.55
      const y = horizon + depth / z
      if (y > h + 1) continue
      ctx.strokeStyle = `rgba(${ink},${(0.08 / z) * smooth(0, depth * 0.35, y - horizon)})`
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(w, y)
      ctx.stroke()
    }
    const fade = ctx.createLinearGradient(0, horizon, 0, h)
    fade.addColorStop(0, `rgba(${ink},0)`)
    fade.addColorStop(0.45, `rgba(${ink},0.035)`)
    fade.addColorStop(1, `rgba(${ink},0.07)`)
    ctx.strokeStyle = fade
    const spacing = Math.max(90, w / 11)
    for (let k = -18; k <= 18; k++) {
      ctx.globalAlpha = Math.max(0, 1 - Math.abs(k) * 0.04)
      ctx.beginPath()
      ctx.moveTo(cx, horizon)
      ctx.lineTo(cx + k * spacing * 1.8, h)
      ctx.stroke()
    }
    ctx.globalAlpha = 1
  }

  const draw = () => {
    const t = reduce ? scene.still ?? 0 : (performance.now() - t0) / 1000
    const [cx, cy] = scene.center ? scene.center(w, h) : [w / 2, h / 2]
    const radius = scene.radius ? scene.radius(w, h) : Math.min(w, h) * 0.38
    const info: FrameInfo = { t, w, h, dark, palette, cx, cy, radius }
    scene.frame(t, b, first, info)
    first = false

    ctx.clearRect(0, 0, w, h)
    if (opts.floor) drawFloor(w / 2)

    leanX += (wantX - leanX) * 0.06
    leanY += (wantY - leanY) * 0.06
    const yaw = (scene.spin ?? 0) * Math.PI * 2 * t + leanY
    const pitch = (scene.pitch ?? 0) + leanX
    const cyw = Math.cos(yaw)
    const syw = Math.sin(yaw)
    const cp = Math.cos(pitch)
    const sp = Math.sin(pitch)

    for (let i = 0; i < n; i++) {
      const a0 = b.a[i]
      if (a0 <= 0.005) continue
      const x0 = b.x[i]
      const y0 = b.y[i]
      const z0 = b.z[i]
      const x1 = x0 * cyw - z0 * syw
      const z1 = x0 * syw + z0 * cyw
      const y1 = y0 * cp - z1 * sp
      const z2 = y0 * sp + z1 * cp
      const persp = PERSPECTIVE / (PERSPECTIVE + z2)
      const sx = cx + x1 * radius * persp
      const sy = cy + y1 * radius * persp

      // Scatter from the pointer and spring back.
      const o = i * 2
      if (!reduce) {
        const dx = sx + off[o] - mx
        const dy = sy + off[o + 1] - my
        const d2 = dx * dx + dy * dy
        if (d2 < R * R && d2 > 0.01) {
          const d = Math.sqrt(d2)
          const f = (1 - d / R) * 1.4
          vel[o] += (dx / d) * f
          vel[o + 1] += (dy / d) * f
        }
        vel[o] = (vel[o] - off[o] * 0.05) * 0.86
        vel[o + 1] = (vel[o + 1] - off[o + 1] * 0.05) * 0.86
        off[o] += vel[o]
        off[o + 1] += vel[o + 1]
      }

      const front = clamp01((1 - z2) / 2)
      let alpha = a0 * (depthFloor + (1 - depthFloor) * front)
      if (b.nz) {
        const nzr = b.nx![i] * syw + b.nz[i] * cyw
        alpha *= faceShade(b.ny![i] * sp + nzr * cp)
      }
      const s = b.s[i] * persp * (0.8 + 0.4 * front)
      const px = sx + off[o]
      const py = sy + off[o + 1]
      if (b.glow?.[i]) {
        const gs = s * 8
        ctx.globalAlpha = Math.min(1, a0)
        ctx.drawImage(halo, px - gs / 2, py - gs / 2, gs, gs)
      }
      ctx.globalAlpha = Math.min(1, alpha)
      ctx.drawImage(sprites[b.c[i]] ?? sprites[0], px - s / 2, py - s / 2, s, s)
    }
    ctx.globalAlpha = 1
    scene.overlay?.(ctx, info)
  }

  const loop = () => {
    draw()
    raf = requestAnimationFrame(loop)
  }
  const start = () => {
    if (running || reduce) return
    running = true
    raf = requestAnimationFrame(loop)
  }
  const stop = () => {
    running = false
    cancelAnimationFrame(raf)
  }

  const area = opts.pointerArea ?? canvas
  const onMove = (e: PointerEvent) => {
    const rect = canvas.getBoundingClientRect()
    mx = e.clientX - rect.left
    my = e.clientY - rect.top
    const ar = area.getBoundingClientRect()
    const lean = scene.lean ?? 0.35
    wantY = ((e.clientX - ar.left) / ar.width - 0.5) * lean * 2
    wantX = ((e.clientY - ar.top) / ar.height - 0.5) * lean
  }
  const onLeave = () => {
    mx = my = -1e5
    wantX = wantY = 0
  }
  const onScroll = () => {
    if (!running) draw()
  }

  resize()
  draw()
  const ro = new ResizeObserver(() => {
    resize()
    draw()
  })
  ro.observe(canvas)
  const io = new IntersectionObserver(([e]) => (e.isIntersecting && !document.hidden ? start() : stop()))
  io.observe(canvas)
  const onVisibility = () => (document.hidden ? stop() : start())
  document.addEventListener('visibilitychange', onVisibility)
  area.addEventListener('pointermove', onMove)
  area.addEventListener('pointerleave', onLeave)
  if (opts.redrawOnScroll) window.addEventListener('scroll', onScroll, { passive: true })
  const offTheme = onThemeChange((d) => {
    dark = d
    palette = d ? opts.palette.dark : opts.palette.light
    sprites = palette.map(dotSprite)
    halo = glowSprite(palette[opts.glowColor ?? 0])
    if (!running) draw()
  })

  return {
    redraw: draw,
    destroy() {
      stop()
      ro.disconnect()
      io.disconnect()
      offTheme()
      document.removeEventListener('visibilitychange', onVisibility)
      area.removeEventListener('pointermove', onMove)
      area.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('scroll', onScroll)
    },
  }
}
