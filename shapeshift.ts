// A scene that reshapes on demand instead of on scroll: call `show(figure)`
// and every dot flies from wherever it is now to its place in the new shape,
// on the same staggered, swirling path as the kit's morphScene. Calling
// `show` again mid-flight just re-aims the dots, so fast hovering stays
// smooth. Each figure idles on its own (a slow spin or a gentle sway).

import { clamp01, easeInOut, rng, smooth, type Cloud, type Scene } from './particle-kit/src/index.ts'

/** A cloud with optional per-dot size (px at unit depth) and opacity. */
export type Form = Cloud & { s?: Float32Array; a?: Float32Array }

export type Figure = {
  form: Form
  /** Turns per second about the vertical axis. */
  spin?: number
  /** Or: rock side to side by this many radians. */
  sway?: number
  /** Resting pitch toward the viewer (radians). */
  pitch?: number
  /** Size relative to the stage radius. Default 1. */
  scale?: number
  /**
   * A second form with the same dot order, blended in and out on a loop.
   * `hold` (0–0.45) pauses on each form for that share of each half-cycle.
   */
  alt?: { form: Form; period: number; hold?: number }
  /** Move dot `j` of the form at `t` seconds after the figure appeared (edit `p` in place). */
  move?: (t: number, j: number, p: [number, number, number]) => void
}

type Extra = Pick<Scene, 'lean' | 'radius' | 'center'>

export function shapeshift(n: number, extra: Extra = {}, { duration = 1.25, stagger = 0.4, swirl = 0.3, seed = 11 } = {}) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const r = rng(seed)
  const now = () => performance.now() / 1000

  // Where each dot is (as last drawn) and where the current flight began.
  const cur = { x: new Float32Array(n), y: new Float32Array(n), z: new Float32Array(n), s: new Float32Array(n), a: new Float32Array(n), c: new Uint8Array(n) }
  const from = { x: new Float32Array(n), y: new Float32Array(n), z: new Float32Array(n), s: new Float32Array(n), a: new Float32Array(n), c: new Uint8Array(n) }

  const delay = new Float32Array(n)
  const sw = new Float32Array(n * 3)
  const phase = new Float32Array(n)
  for (let i = 0; i < n; i++) {
    delay[i] = r() * stagger
    const a = r() * Math.PI * 2
    const b = Math.acos(2 * r() - 1)
    sw[i * 3] = Math.sin(b) * Math.cos(a)
    sw[i * 3 + 1] = Math.sin(b) * Math.sin(a)
    sw[i * 3 + 2] = Math.cos(b)
    phase[i] = r() * Math.PI * 2
    // Start as faint dust spread through the room.
    const d = 1.1 + r() * 1.1
    cur.x[i] = sw[i * 3] * d * 1.4
    cur.y[i] = sw[i * 3 + 1] * d * 0.8
    cur.z[i] = sw[i * 3 + 2] * d
    cur.s[i] = 1.2
  }

  // Each figure gets its own shuffle, so dots cross over on the way.
  const slots = new WeakMap<Figure, Uint32Array>()
  const slotsFor = (f: Figure) => {
    let s = slots.get(f)
    if (!s) {
      const k = f.form.n
      s = new Uint32Array(n)
      for (let i = 0; i < n; i++) s[i] = i % k
      for (let i = n - 1; i > 0; i--) {
        const j = Math.floor(r() * (i + 1))
        const t = s[i]
        s[i] = s[j]
        s[j] = t
      }
      slots.set(f, s)
    }
    return s
  }

  const mp: [number, number, number] = [0, 0, 0]
  let target: Figure | null = null
  let slot: Uint32Array | null = null
  let t0 = 0
  let span = duration
  let born = 0

  const scene: Scene = {
    count: n,
    ...extra,
    frame(_t, b) {
      const T = now()
      if (!target || !slot) {
        b.a.fill(0)
        return
      }
      const f = target.form
      const alt = target.alt
      let k = 0
      if (alt) {
        const ph = ((T - born) / alt.period) % 1
        k = alt.hold ? smooth(alt.hold, 1 - alt.hold, 1 - Math.abs(ph * 2 - 1)) : (1 - Math.cos(ph * Math.PI * 2)) / 2
      }
      const move = target.move
      const age = T - born
      const yaw = target.spin ? (T - born) * target.spin * Math.PI * 2 : Math.sin(T * 0.45) * (target.sway ?? 0)
      const cy = Math.cos(yaw)
      const sy = Math.sin(yaw)
      const pitch = target.pitch ?? 0
      const cp = Math.cos(pitch)
      const sp = Math.sin(pitch)
      const m = reduce ? 1 : clamp01((T - t0) / span)
      const k0 = target.scale ?? 1

      for (let i = 0; i < n; i++) {
        const e = reduce ? 1 : easeInOut(clamp01(m * (1 + stagger) - delay[i]))
        const j = slot[i]
        let px = f.x[j]
        let py = f.y[j]
        let pz = f.z[j]
        if (alt) {
          px += (alt.form.x[j] - px) * k
          py += (alt.form.y[j] - py) * k
          pz += (alt.form.z[j] - pz) * k
        }
        if (move) {
          mp[0] = px
          mp[1] = py
          mp[2] = pz
          move(age, j, mp)
          px = mp[0]
          py = mp[1]
          pz = mp[2]
        }
        px *= k0
        py *= k0
        pz *= k0
        // Pitch, then yaw, plus a barely-there drift so the shape breathes.
        const y1 = py * cp - pz * sp
        const z1 = py * sp + pz * cp
        const drift = reduce ? 0 : 0.006
        const tx = px * cy - z1 * sy + Math.sin(T * 0.9 + phase[i]) * drift
        const ty = y1 + Math.cos(T * 0.7 + phase[i]) * drift
        const tz = px * sy + z1 * cy
        const lift = Math.sin(Math.PI * e) * swirl
        const x = from.x[i] + (tx - from.x[i]) * e + sw[i * 3] * lift
        const y = from.y[i] + (ty - from.y[i]) * e + sw[i * 3 + 1] * lift
        const z = from.z[i] + (tz - from.z[i]) * e + sw[i * 3 + 2] * lift
        const s0 = f.s ? f.s[j] : 1.6 + ((i * 7919) % 97) / 120
        const a0 = f.a ? f.a[j] : 1
        const s = from.s[i] + (s0 - from.s[i]) * e
        const a = from.a[i] + (a0 - from.a[i]) * e
        const c = e < 0.5 ? from.c[i] : f.c[j]
        b.x[i] = cur.x[i] = x
        b.y[i] = cur.y[i] = y
        b.z[i] = cur.z[i] = z
        b.s[i] = cur.s[i] = s
        b.a[i] = cur.a[i] = a
        b.c[i] = cur.c[i] = c
      }
    },
  }

  return {
    scene,
    /** Fly every dot into `figure`. `time` overrides the flight length (seconds). */
    show(figure: Figure, time = duration) {
      if (figure === target) return
      from.x.set(cur.x)
      from.y.set(cur.y)
      from.z.set(cur.z)
      from.s.set(cur.s)
      from.a.set(cur.a)
      from.c.set(cur.c)
      target = figure
      slot = slotsFor(figure)
      t0 = now()
      born = t0
      span = time
    },
  }
}
