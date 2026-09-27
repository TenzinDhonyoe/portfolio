// Scroll-driven morph: one cloud of dots reorganising into another as the
// reader scrolls. Each dot leaves on its own slight delay and swings out on a
// little swirl on the way, so the change reads as a flow, not a crossfade.

import type { Scene } from './engine.ts'
import type { Cloud } from './shapes.ts'
import { clamp01, easeInOut, rng, smooth } from './rng.ts'

export type MorphOptions = {
  from: Cloud
  to: Cloud
  /** 0–1 driver, usually `trackProgress(section)`. */
  progress: () => number
  /** The slice of progress the morph plays over. Default [0.05, 0.6]. */
  range?: [number, number]
  /** How far apart dots set off (0 = all together). Default 0.35. */
  stagger?: number
  /** How wide they swing out mid-flight. Default 0.32. */
  swirl?: number
  /** Idle turns per second of each shape about its own vertical axis. */
  fromSpin?: number
  toSpin?: number
  /** Scale of the target relative to the source. Default 1. */
  toScale?: number
  /** Order of departure: 'random' or 'top-down' (dots nearest the top go first). */
  order?: 'random' | 'top-down'
  seed?: number
}

type Extra = Pick<Scene, 'spin' | 'pitch' | 'lean' | 'radius' | 'center' | 'still' | 'overlay'>

/** Build a Scene that morphs `from` into `to` as `progress` runs through `range`. */
export function morphScene(o: MorphOptions, extra: Extra = {}): Scene {
  const n = o.from.n
  const r = rng(o.seed ?? 9)
  const [p0, p1] = o.range ?? [0.05, 0.6]
  const stagger = o.stagger ?? 0.35
  const swirlAmt = o.swirl ?? 0.32
  const toScale = o.toScale ?? 1

  // Shuffle which target slot each dot flies to, so they cross over.
  const slot = Array.from({ length: n }, (_, i) => i % o.to.n)
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1))
    ;[slot[i], slot[j]] = [slot[j], slot[i]]
  }
  const delay = new Float32Array(n)
  const sw = new Float32Array(n * 3)
  let minY = Infinity
  let maxY = -Infinity
  for (let i = 0; i < n; i++) {
    minY = Math.min(minY, o.from.y[i])
    maxY = Math.max(maxY, o.from.y[i])
  }
  for (let i = 0; i < n; i++) {
    delay[i] =
      o.order === 'top-down'
        ? ((o.from.y[i] - minY) / (maxY - minY || 1)) * stagger * 0.8 + r() * stagger * 0.2
        : r() * stagger
    const a = r() * Math.PI * 2
    const b = Math.acos(2 * r() - 1)
    sw[i * 3] = Math.sin(b) * Math.cos(a)
    sw[i * 3 + 1] = Math.sin(b) * Math.sin(a)
    sw[i * 3 + 2] = Math.cos(b)
  }
  const hasNormals = Boolean(o.from.nx)

  return {
    count: n,
    ...extra,
    frame(t, b, first) {
      if (first && hasNormals) {
        b.nx = new Float32Array(n)
        b.ny = new Float32Array(n)
        b.nz = new Float32Array(n)
      }
      const m = smooth(p0, p1, o.progress())
      const a1 = t * (o.fromSpin ?? 0) * Math.PI * 2
      const a2 = t * (o.toSpin ?? 0) * Math.PI * 2
      const c1 = Math.cos(a1)
      const s1 = Math.sin(a1)
      const c2 = Math.cos(a2)
      const s2 = Math.sin(a2)
      for (let i = 0; i < n; i++) {
        const e = easeInOut(clamp01(m * (1 + stagger) - delay[i]))
        const k = slot[i]
        // Each shape turns about its own axis; the dot travels between them.
        const fx = o.from.x[i] * c1 - o.from.z[i] * s1
        const fz = o.from.x[i] * s1 + o.from.z[i] * c1
        const tx = (o.to.x[k] * c2 - o.to.z[k] * s2) * toScale
        const tz = (o.to.x[k] * s2 + o.to.z[k] * c2) * toScale
        const ty = o.to.y[k] * toScale
        const lift = Math.sin(Math.PI * e) * swirlAmt
        b.x[i] = fx + (tx - fx) * e + sw[i * 3] * lift
        b.y[i] = o.from.y[i] + (ty - o.from.y[i]) * e + sw[i * 3 + 1] * lift
        b.z[i] = fz + (tz - fz) * e + sw[i * 3 + 2] * lift
        b.c[i] = e < 0.5 ? o.from.c[i] : o.to.c[k]
        b.s[i] = 1.7 + ((i * 7919) % 97) / 97 + e * 0.3
        if (hasNormals) {
          // Shading belongs to the source shape; ease it out as dots leave.
          const nx = o.from.nx![i] * c1 - o.from.nz![i] * s1
          const nz = o.from.nx![i] * s1 + o.from.nz![i] * c1
          b.nx![i] = nx * (1 - e)
          b.ny![i] = o.from.ny![i] * (1 - e)
          b.nz![i] = nz * (1 - e) - e
        }
      }
    },
  }
}
