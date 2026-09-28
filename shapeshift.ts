// A scene that reshapes on demand instead of on scroll: call `show(figure)`
// and every dot flies from wherever it is now to its place in the new shape,
// on the same staggered, swirling path as the kit's morphScene. Calling
// `show` again mid-flight just re-aims the dots, so fast hovering stays
// smooth. Each figure idles on its own (a slow spin or a gentle sway).

import { clamp01, easeInOut, rng, smooth, type Cloud, type FrameInfo, type Scene } from './particle-kit/src/index.ts'

/** A cloud with optional per-dot size (px at unit depth) and opacity. */
export type Form = Cloud & { s?: Float32Array; a?: Float32Array }

/** Where a figure's `place` puts one dot: position, size (px at unit depth), opacity and palette index. */
export type Place = { x: number; y: number; z: number; s: number; a: number; c: number }

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
  /**
   * Or take over: write where dot `j` is every frame, `t` seconds after the
   * figure appeared. Replaces everything above except `form` (whose `n` sets
   * how many roles there are); the flight in still happens.
   */
  place?: (t: number, j: number, o: Place) => void
  /** With `place`: called once a frame, before any dot is placed. */
  tick?: (t: number, info: FrameInfo) => void
}

/**
 * Poses a figure's dots for one frame: the alt blend, `move`, scale, then
 * pitch and yaw. Call `frame` once per frame, then `dot` for each dot.
 */
export function poser() {
  const p: [number, number, number] = [0, 0, 0]
  let f: Figure | null = null
  let k = 0
  let age = 0
  let cy = 1
  let sy = 0
  let cp = 1
  let sp = 0
  let k0 = 1
  return {
    /** Set up for `fig` at time `T` (seconds), which appeared at `born`. */
    frame(fig: Figure, T: number, born: number) {
      f = fig
      age = T - born
      k = 0
      if (fig.alt) {
        const ph = (age / fig.alt.period) % 1
        const hold = fig.alt.hold
        k = hold ? smooth(hold, 1 - hold, 1 - Math.abs(ph * 2 - 1)) : (1 - Math.cos(ph * Math.PI * 2)) / 2
      }
      const yaw = fig.spin ? age * fig.spin * Math.PI * 2 : Math.sin(T * 0.45) * (fig.sway ?? 0)
      cy = Math.cos(yaw)
      sy = Math.sin(yaw)
      cp = Math.cos(fig.pitch ?? 0)
      sp = Math.sin(fig.pitch ?? 0)
      k0 = fig.scale ?? 1
    },
    /** Where dot `j` of the form sits now, relative to the figure's centre. */
    dot(j: number, out: [number, number, number]) {
      const form = f!.form
      let px = form.x[j]
      let py = form.y[j]
      let pz = form.z[j]
      const alt = f!.alt
      if (alt) {
        px += (alt.form.x[j] - px) * k
        py += (alt.form.y[j] - py) * k
        pz += (alt.form.z[j] - pz) * k
      }
      if (f!.move) {
        p[0] = px
        p[1] = py
        p[2] = pz
        f!.move(age, j, p)
        px = p[0]
        py = p[1]
        pz = p[2]
      }
      px *= k0
      py *= k0
      pz *= k0
      // Pitch, then yaw.
      const y1 = py * cp - pz * sp
      const z1 = py * sp + pz * cp
      out[0] = px * cy - z1 * sy
      out[1] = y1
      out[2] = px * sy + z1 * cy
    },
  }
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

  const pose = poser()
  const mp: [number, number, number] = [0, 0, 0]
  const pl: Place = { x: 0, y: 0, z: 0, s: 0, a: 0, c: 0 }
  let target: Figure | null = null
  let slot: Uint32Array | null = null
  let t0 = 0
  let span = duration
  let born = 0

  const scene: Scene = {
    count: n,
    ...extra,
    frame(_t, b, _first, info) {
      const T = now()
      if (!target || !slot) {
        b.a.fill(0)
        return
      }
      const f = target.form
      const place = target.place
      const age = T - born
      if (place) target.tick?.(age, info)
      else pose.frame(target, T, born)
      const m = reduce ? 1 : clamp01((T - t0) / span)
      // A barely-there drift so the shape breathes.
      const drift = reduce ? 0 : 0.006

      for (let i = 0; i < n; i++) {
        const e = reduce ? 1 : easeInOut(clamp01(m * (1 + stagger) - delay[i]))
        const j = slot[i]
        let tx, ty, tz, s0, a0, c0
        if (place) {
          place(age, j, pl)
          tx = pl.x
          ty = pl.y
          tz = pl.z
          s0 = pl.s
          a0 = pl.a
          c0 = pl.c
        } else {
          pose.dot(j, mp)
          tx = mp[0] + Math.sin(T * 0.9 + phase[i]) * drift
          ty = mp[1] + Math.cos(T * 0.7 + phase[i]) * drift
          tz = mp[2]
          s0 = f.s ? f.s[j] : 1.6 + ((i * 7919) % 97) / 120
          a0 = f.a ? f.a[j] : 1
          c0 = f.c[j]
        }
        const lift = Math.sin(Math.PI * e) * swirl
        const x = from.x[i] + (tx - from.x[i]) * e + sw[i * 3] * lift
        const y = from.y[i] + (ty - from.y[i]) * e + sw[i * 3 + 1] * lift
        const z = from.z[i] + (tz - from.z[i]) * e + sw[i * 3 + 2] * lift
        const s = from.s[i] + (s0 - from.s[i]) * e
        const a = from.a[i] + (a0 - from.a[i]) * e
        const c = e < 0.5 ? from.c[i] : c0
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
