// The "Life" figures: the things outside work, as dots. Same units and
// palette as the project figures (0 ink, 1 graphite, 2 gray). Most of them
// move a little: strings ring, a ball bounces, food flips, gears turn, a
// heart beats.

import { build, lerp, onRoundRect, onShell, type Rand, type V } from './parts.ts'
import type { Figure, Form } from './shapeshift.ts'
import { himalaya } from './terrain.ts'

const TAU = Math.PI * 2

function inPolygon(x: number, y: number, poly: [number, number][]) {
  let inside = false
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i]
    const [xj, yj] = poly[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside
  }
  return inside
}

/** A point along a closed polyline, evenly by arc length. */
function alongPath(pts: [number, number][]) {
  const cum = [0]
  for (let i = 1; i <= pts.length; i++) {
    const [ax, ay] = pts[i - 1]
    const [bx, by] = pts[i % pts.length]
    cum.push(cum[i - 1] + Math.hypot(bx - ax, by - ay))
  }
  const total = cum[cum.length - 1]
  return (u: number): [number, number] => {
    const d = u * total
    let lo = 0
    let hi = pts.length
    while (lo < hi) {
      const m = (lo + hi) >> 1
      if (cum[m + 1] < d) lo = m + 1
      else hi = m
    }
    const t = (d - cum[lo]) / (cum[lo + 1] - cum[lo] || 1)
    const [ax, ay] = pts[lo]
    const [bx, by] = pts[(lo + 1) % pts.length]
    return [lerp(ax, bx, t), lerp(ay, by, t)]
  }
}

/** Turn a whole form about the z axis (in the screen plane). */
function turnZ(f: Form, a: number) {
  const c = Math.cos(a)
  const s = Math.sin(a)
  for (let i = 0; i < f.n; i++) {
    const x = f.x[i]
    const y = f.y[i]
    f.x[i] = x * c - y * s
    f.y[i] = x * s + y * c
  }
}

// ---- Nepal → Canada: the Himalaya, becoming a maple leaf ----------------------

function home(n: number, dark = false): Figure {
  // A realistic massif (see terrain.ts), stippled for the current theme.
  const mountains = himalaya(n, { dark })
  // The flag's maple leaf, right half from the top point; mirrored for the left.
  const half: [number, number][] = [
    [0, 1],
    [0.1, 0.8],
    [0.22, 0.86],
    [0.2, 0.5],
    [0.45, 0.73],
    [0.52, 0.62],
    [0.72, 0.68],
    [0.64, 0.46],
    [0.78, 0.4],
    [0.46, 0.12],
    [0.52, 0.01],
    [0.06, 0.06],
    [0.05, -0.36],
  ]
  const leaf: [number, number][] = [...half, ...half.slice(1).reverse().map(([x, y]): [number, number] => [-x, y])]
  const edge = alongPath(leaf)
  const place = (x: number, y: number, z: number, o: V) => o.splice(0, 3, x * 0.95, -(y - 0.32) * 0.95, z)
  const maple = build(n, 92, [
    {
      share: 0.62,
      color: 0,
      at(r, _u, o) {
        let x = 0
        let y = 0
        for (let tries = 0; tries < 60; tries++) {
          x = lerp(-0.8, 0.8, r())
          y = lerp(-0.36, 1, r())
          if (inPolygon(x, y, leaf)) break
        }
        place(x, y, (r() - 0.5) * 0.08, o)
      },
    },
    {
      share: 0.38,
      color: 0,
      size: 1.9,
      at(r, u, o) {
        const [x, y] = edge(u)
        place(x, y, (r() - 0.5) * 0.08, o)
      },
    },
  ])
  return { form: mountains, alt: { form: maple, period: 8, hold: 0.4 }, sway: 0.3, pitch: 0.2 }
}

// ---- Guitar, strings ringing ----------------------------------------------------

function guitar(n: number): Figure {
  const TILT = 0.62
  const lower = { y: 0.5, r: 0.36 }
  const upper = { y: 0.02, r: 0.27 }
  const inBody = (x: number, y: number) => Math.hypot(x, y - lower.y) < lower.r || Math.hypot(x, y - upper.y) < upper.r
  const outline = (r: Rand): [number, number] => {
    for (let tries = 0; tries < 30; tries++) {
      const big = r() < lower.r / (lower.r + upper.r)
      const c = big ? lower : upper
      const other = big ? upper : lower
      const a = r() * TAU
      const x = Math.cos(a) * c.r
      const y = c.y + Math.sin(a) * c.r
      if (Math.hypot(x, y - other.y) > other.r) return [x, y]
    }
    return [lower.r, lower.y]
  }
  const F = -0.07 // the top of the guitar faces the viewer
  // String j's position along its length (0 at the bridge, 1 at the nut), or -1.
  const along = new Float32Array(n).fill(-1)
  const which = new Uint8Array(n)
  const frets = Array.from({ length: 14 }, (_, k) => -0.22 - 0.78 * (1 - Math.pow(2, -(k + 1) / 7)) * 1.3)

  const form = build(n, 93, [
    { share: 0.2, color: 0, size: 1.8, at: (r, _u, o) => (([o[0], o[1]] = outline(r)), (o[2] = F)) },
    { share: 0.06, color: 2, at: (r, _u, o) => (([o[0], o[1]] = outline(r)), (o[2] = -F)) },
    { share: 0.07, color: 2, at: (r, _u, o) => (([o[0], o[1]] = outline(r)), (o[2] = lerp(F, -F, r()))) },
    {
      share: 0.1,
      color: 2,
      at(r, _u, o) {
        let x = 0
        let y = 0
        for (let tries = 0; tries < 40; tries++) {
          x = lerp(-0.36, 0.36, r())
          y = lerp(-0.25, 0.86, r())
          if (inBody(x, y) && Math.hypot(x, y - 0.12) > 0.13) break
        }
        o.splice(0, 3, x, y, F)
      },
    },
    {
      // Sound hole and rosette.
      share: 0.08,
      color: 0,
      at(r, _u, o) {
        const a = r() * TAU
        const rr = r() < 0.6 ? 0.1 : 0.13
        o.splice(0, 3, Math.cos(a) * rr, 0.12 + Math.sin(a) * rr, F)
      },
    },
    { share: 0.03, color: 0, at: (r, _u, o) => o.splice(0, 3, lerp(-0.14, 0.14, r()), 0.63 + lerp(-0.025, 0.025, r()), F) },
    {
      // Neck edges.
      share: 0.07,
      color: 1,
      at(r, u, o) {
        const y = lerp(-0.24, -1.02, r())
        const w = lerp(0.06, 0.045, (y + 0.24) / -0.78)
        o.splice(0, 3, u < 0.5 ? -w : w, y, F)
      },
    },
    {
      share: 0.04,
      color: 2,
      at(r, u, o) {
        const y = frets[Math.min(frets.length - 1, Math.floor(u * frets.length))]
        const w = lerp(0.06, 0.045, (y + 0.24) / -0.78)
        o.splice(0, 3, lerp(-w, w, r()), y, F)
      },
    },
    { share: 0.05, color: 1, at: (_r, u, o) => (onRoundRect(0.085, 0.13, 0.04, u, o), (o[1] += -1.15), (o[2] = F)) },
    {
      // Tuning pegs.
      share: 0.02,
      color: 0,
      at(r, u, o) {
        const k = Math.min(5, Math.floor(u * 6))
        const side = k < 3 ? -1 : 1
        onShell(r, [side * 0.115, -1.07 - (k % 3) * 0.07, F], [0.022, 0.018, 0.018], o)
      },
    },
    {
      share: 0.18,
      color: 0,
      size: 1.3,
      at(r, _u, o, i) {
        const k = Math.floor(r() * 6)
        const t = r()
        const x0 = (k - 2.5) * 0.021
        const x1 = (k - 2.5) * 0.015
        along[i] = t
        which[i] = k
        o.splice(0, 3, lerp(x0, x1, t), lerp(0.63, -1.02, t), F - 0.018)
      },
    },
  ])
  // Centre it, then lean it like it's being held.
  for (let i = 0; i < n; i++) form.y[i] += 0.19
  turnZ(form, TILT)
  const ax = Math.cos(TILT)
  const ay = Math.sin(TILT)
  return {
    form,
    sway: 0.4,
    move(t, j, p) {
      const u = along[j]
      if (u < 0) return
      // A strum every 2.6 s, each string ringing at its own pitch and fading out.
      const since = (t + 1.9) % 2.6
      const amp = 0.022 * Math.exp(-since * 2.2) * Math.sin(Math.PI * u)
      const v = amp * Math.sin(since * (38 + which[j] * 7))
      p[0] += ax * v
      p[1] += ay * v
    },
  }
}

// ---- Pickleball: a paddle and a holey ball bouncing off it ----------------------

function pickleball(n: number): Figure {
  const ball = new Uint8Array(n)
  const holes = Array.from({ length: 26 }, (_, k) => {
    const y = 1 - ((k + 0.5) / 26) * 2
    const q = Math.sqrt(1 - y * y)
    const a = k * Math.PI * (3 - Math.sqrt(5))
    return [Math.cos(a) * q, y, Math.sin(a) * q]
  })
  const R = 0.2
  const paddleF = -0.03
  const form = build(n, 94, [
    { share: 0.15, color: 0, size: 1.8, at: (_r, u, o) => (onRoundRect(0.34, 0.42, 0.15, u, o), (o[1] -= 0.12), (o[2] = paddleF)) },
    { share: 0.05, color: 2, at: (_r, u, o) => (onRoundRect(0.34, 0.42, 0.15, u, o), (o[1] -= 0.12), (o[2] = -paddleF)) },
    { share: 0.06, color: 1, at: (r, u, o) => (onRoundRect(0.34, 0.42, 0.15, u, o), (o[1] -= 0.12), (o[2] = lerp(paddleF, -paddleF, r()))) },
    {
      // The hitting surface, lightly textured.
      share: 0.15,
      color: 2,
      at(r, _u, o) {
        o.splice(0, 3, lerp(-0.31, 0.31, r()), lerp(-0.51, 0.27, r()), paddleF)
      },
    },
    {
      // Handle, with a spiral grip wrap.
      share: 0.13,
      color: 1,
      at(r, _u, o) {
        const y = lerp(0.3, 0.92, r())
        const a = r() * TAU
        o.splice(0, 3, Math.cos(a) * 0.065, y, Math.sin(a) * 0.04)
      },
    },
    {
      share: 0.06,
      color: 0,
      at(r, u, o) {
        const s = u * 9
        const y = lerp(0.36, 0.9, s / 9)
        const a = s * TAU
        o.splice(0, 3, Math.cos(a) * 0.068, y, Math.sin(a) * 0.043 - 0.002)
      },
    },
    {
      // The ball: a shell with round holes, and a ring around each hole.
      share: 0.24,
      color: 0,
      size: 1.8,
      at(r, _u, o, i) {
        ball[i] = 1
        if (r() < 0.4) {
          const h = holes[Math.floor(r() * holes.length)]
          // Two tangent directions around the hole centre.
          const tx = Math.abs(h[1]) < 0.9 ? [h[2], 0, -h[0]] : [0, -h[2], h[1]]
          const tl = Math.hypot(tx[0], tx[1], tx[2])
          const t1 = tx.map((v) => v / tl)
          const t2 = [h[1] * t1[2] - h[2] * t1[1], h[2] * t1[0] - h[0] * t1[2], h[0] * t1[1] - h[1] * t1[0]]
          const a = r() * TAU
          const w = 0.28
          const d = [0, 1, 2].map((k) => h[k] * Math.cos(w) + (t1[k] * Math.cos(a) + t2[k] * Math.sin(a)) * Math.sin(w))
          o.splice(0, 3, d[0] * R, d[1] * R, d[2] * R)
          return
        }
        for (let tries = 0; tries < 40; tries++) {
          onShell(r, [0, 0, 0], [R, R, R], o)
          const ok = holes.every((h) => (o[0] * h[0] + o[1] * h[1] + o[2] * h[2]) / R < Math.cos(0.3))
          if (ok) break
        }
      },
    },
  ])
  // Tip the paddle back and lean it to the side; the ball stays at the
  // origin (its flight is set in move).
  const cy = Math.cos(-0.5)
  const sy = Math.sin(-0.5)
  const cz = Math.cos(-0.28)
  const sz = Math.sin(-0.28)
  const bx = new Float32Array(n)
  const by = new Float32Array(n)
  const bz = new Float32Array(n)
  for (let i = 0; i < n; i++) {
    if (ball[i]) {
      bx[i] = form.x[i]
      by[i] = form.y[i]
      bz[i] = form.z[i]
      continue
    }
    const x = form.x[i] * cy - form.z[i] * sy
    const z = form.x[i] * sy + form.z[i] * cy
    const y = form.y[i] + 0.1
    form.x[i] = x * cz - y * sz - 0.18
    form.y[i] = x * sz + y * cz
    form.z[i] = z
  }
  return {
    form,
    sway: 0.35,
    move(t, j, p) {
      if (!ball[j]) return
      // Bounce: a parabola each second, touching the paddle at the bottom.
      const ph = (t / 1.15) % 1
      const h = 4 * ph * (1 - ph)
      const spin = t * 2.4
      const x = bx[j] * Math.cos(spin) - bz[j] * Math.sin(spin)
      const z = bx[j] * Math.sin(spin) + bz[j] * Math.cos(spin)
      p[0] = 0.38 + x
      p[1] = -0.24 - h * 0.58 + by[j]
      p[2] = -0.2 + z
    },
  }
}

// ---- Cooking: a wok toss ----------------------------------------------------------

function wok(n: number): Figure {
  const R = 0.72
  const bottom = 0.36
  const yc = bottom - R
  const cosMax = (R - 0.28) / R
  const rim = R * Math.sqrt(1 - cosMax * cosMax)
  const rimY = yc + R * cosMax
  const BITS = 16
  const bit = new Int16Array(n).fill(-1)
  const r0 = (() => {
    let a = 7
    return () => ((a = (a * 16807) % 2147483647) / 2147483647)
  })()
  const rest = Array.from({ length: BITS }, () => {
    const a = r0() * TAU
    const rr = Math.sqrt(r0()) * 0.34
    const x = Math.cos(a) * rr
    const z = Math.sin(a) * rr
    return { x, z, y: yc + Math.sqrt(R * R - rr * rr) - 0.06, lift: 0.85 + r0() * 0.45, drift: (r0() - 0.5) * 0.3, delay: r0() * 0.08 }
  })
  const form = build(n, 95, [
    {
      share: 0.38,
      color: 1,
      at(r, _u, o) {
        const c = lerp(cosMax, 1, r())
        const q = Math.sqrt(1 - c * c)
        const a = r() * TAU
        o.splice(0, 3, Math.cos(a) * q * R, yc + c * R, Math.sin(a) * q * R)
      },
    },
    {
      share: 0.16,
      color: 0,
      size: 2,
      at(r, _u, o) {
        const a = r() * TAU
        const k = rim + (r() < 0.5 ? 0 : 0.025)
        o.splice(0, 3, Math.cos(a) * k, rimY - (r() < 0.5 ? 0 : 0.012), Math.sin(a) * k)
      },
    },
    {
      // The long handle, darker where the wooden grip is.
      share: 0.1,
      color: 0,
      at(r, _u, o) {
        const t = r()
        const a = r() * TAU
        const rad = t > 0.45 ? 0.05 : 0.03
        o.splice(0, 3, lerp(rim, 1.18, t), lerp(rimY, rimY - 0.2, t) + Math.cos(a) * rad, Math.sin(a) * rad)
      },
    },
    {
      // The small helper handle opposite.
      share: 0.03,
      color: 1,
      at(r, _u, o) {
        const a = lerp(-Math.PI / 2, Math.PI / 2, r())
        o.splice(0, 3, -rim - Math.cos(a) * 0.1, rimY - 0.01, Math.sin(a) * 0.08)
      },
    },
    {
      share: 0.37,
      color: 0,
      size: 1.9,
      at(r, u, o, i) {
        const b = Math.min(BITS - 1, Math.floor(u * BITS))
        bit[i] = b
        const f = rest[b]
        onShell(r, [f.x, f.y, f.z], [0.05, 0.035, 0.05], o)
        if (b % 3 === 0) o[1] -= 0.01
      },
    },
  ])
  for (let i = 0; i < n; i++) form.y[i] -= 0.02
  return {
    form,
    sway: 0.35,
    pitch: -0.45,
    move(t, j, p) {
      const b = bit[j]
      if (b < 0) return
      const f = rest[b]
      // Toss every 1.9 s: up in an arc, then back into the pan.
      const ph = ((t + f.delay) % 1.9) / 1.9
      if (ph > 0.5) return
      const s = ph / 0.5
      const h = 4 * s * (1 - s)
      const turn = s * Math.PI * (b % 2 ? 1 : -1)
      const dx = p[0] - f.x
      const dy = p[1] - f.y
      p[0] = f.x + dx * Math.cos(turn) - dy * Math.sin(turn) + f.drift * Math.sin(Math.PI * s)
      p[1] = f.y + dx * Math.sin(turn) + dy * Math.cos(turn) - h * f.lift
    },
  }
}

// ---- Weekends: building and tinkering, as two meshing gears -----------------------

function gears(n: number): Figure {
  const A = { cx: -0.2, cy: 0.18, rp: 0.44, N: 12 }
  const alpha = -0.72
  const B = { cx: A.cx + Math.cos(alpha) * 0.74, cy: A.cy + Math.sin(alpha) * 0.74, rp: 0.3, N: 8 }
  // Pitch radii 0.44 + 0.30 = 0.74 apart; 12 and 8 teeth share one tooth size.
  const ADD = 0.05
  const profile = (g: typeof A): [number, number][] =>
    Array.from({ length: 900 }, (_, k) => {
      const th = (k / 900) * TAU
      const tooth = Math.max(-1, Math.min(1, Math.cos(g.N * th) * 3.2))
      const rr = g.rp + ADD * tooth
      return [Math.cos(th) * rr, Math.sin(th) * rr]
    })
  const pathA = alongPath(profile(A))
  const pathB = alongPath(profile(B))
  const gearOf = new Int8Array(n).fill(-1)
  const lx = new Float32Array(n)
  const ly = new Float32Array(n)
  const T = 0.07
  const gearParts = (g: typeof A, id: number, path: (u: number) => [number, number], color: number, weight: number) => {
    const put = (o: V, i: number, x: number, y: number, z: number) => {
      gearOf[i] = id
      lx[i] = x
      ly[i] = y
      o.splice(0, 3, x, y, z)
    }
    return [
      { share: 0.2 * weight, color, size: 1.8, at: (_r: Rand, u: number, o: V, i: number) => put(o, i, ...path(u), -T) },
      { share: 0.06 * weight, color: 2, at: (_r: Rand, u: number, o: V, i: number) => put(o, i, ...path(u), T) },
      { share: 0.07 * weight, color: 2, at: (r: Rand, u: number, o: V, i: number) => put(o, i, ...path(u), lerp(-T, T, r())) },
      {
        // Inner rim, hub and five spokes on the front face.
        share: 0.14 * weight,
        color,
        at(r: Rand, u: number, o: V, i: number) {
          const pick = r()
          if (pick < 0.4) {
            const a = r() * TAU
            put(o, i, Math.cos(a) * g.rp * 0.72, Math.sin(a) * g.rp * 0.72, -T)
          } else if (pick < 0.62) {
            const a = r() * TAU
            const rr = r() < 0.5 ? 0.07 : 0.035
            put(o, i, Math.cos(a) * rr, Math.sin(a) * rr, -T)
          } else {
            const a = Math.floor(r() * 5) * (TAU / 5)
            const rr = lerp(0.07, g.rp * 0.72, r())
            put(o, i, Math.cos(a) * rr, Math.sin(a) * rr, -T)
          }
        },
      },
    ]
  }
  const form = build(n, 96, [...gearParts(A, 0, pathA, 0, 1.4), ...gearParts(B, 1, pathB, 1, 0.95)])
  // Mesh: a tooth of A points along the line to B while B shows a gap there.
  const a0 = alpha
  const b0 = alpha + Math.PI - Math.PI / B.N
  const W = 0.45
  return {
    form,
    sway: 0.3,
    move(t, j, p) {
      const g = gearOf[j]
      if (g < 0) return
      const G = g === 0 ? A : B
      const ang = g === 0 ? a0 + W * t : b0 - W * (A.N / B.N) * t
      const c = Math.cos(ang)
      const s = Math.sin(ang)
      p[0] = G.cx + lx[j] * c - ly[j] * s
      p[1] = G.cy + lx[j] * s + ly[j] * c
    },
  }
}

// ---- The goal: one person, one heartbeat -------------------------------------------

function goal(n: number): Figure {
  const heart = new Uint8Array(n)
  const H: V = [0.12, 0.2, -0.27]
  const form = build(n, 97, [
    { share: 0.2, color: 2, at: (r, _u, o) => onShell(r, [0, -0.56, 0], [0.2, 0.24, 0.2], o) },
    {
      share: 0.03,
      color: 2,
      at(r, _u, o) {
        const a = r() * TAU
        o.splice(0, 3, Math.cos(a) * 0.08, lerp(-0.34, -0.2, r()), Math.sin(a) * 0.08)
      },
    },
    {
      // Shoulders and chest, cut off at the bottom like a bust.
      share: 0.47,
      color: 2,
      at(r, _u, o) {
        for (let tries = 0; tries < 30; tries++) {
          onShell(r, [0, 0.46, 0], [0.54, 0.62, 0.27], o)
          if (o[1] < 0.86) break
        }
      },
    },
    {
      share: 0.3,
      color: 0,
      size: 1.9,
      at(r, _u, o, i) {
        heart[i] = 1
        const t = r() * TAU
        const s = Math.sqrt(r())
        const hx = 16 * Math.sin(t) ** 3
        const hy = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)
        const z = 0.3 * Math.sqrt(Math.max(0, 1 - s * s)) * (r() < 0.5 ? -1 : 1)
        const k = 0.17 / 17
        o.splice(0, 3, H[0] + hx * s * k, H[1] - hy * s * k, H[2] + z * 0.17)
      },
    },
  ])
  return {
    form,
    sway: 0.3,
    move(t, j, p) {
      if (!heart[j]) return
      // Lub-dub, about 70 beats a minute.
      const ph = (t % 0.86) / 0.86
      const beat = Math.exp(-(((ph - 0.05) / 0.045) ** 2)) + 0.6 * Math.exp(-(((ph - 0.24) / 0.045) ** 2))
      const k = 1 + beat * 0.2
      p[0] = H[0] + (p[0] - H[0]) * k
      p[1] = H[1] + (p[1] - H[1]) * k
      p[2] = H[2] + (p[2] - H[2]) * k
    },
  }
}

/** Figures drawn differently in light and dark (tone-stippled, like the portrait). */
export const THEMED = new Set(['home'])

export const LIFE_FIGURES: Record<string, (n: number, dark?: boolean) => Figure> = {
  home,
  guitar,
  pickleball,
  cooking: wok,
  tinkering: gears,
  goal,
}
