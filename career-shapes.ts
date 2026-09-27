// The Work and Milestones figures. Same units and palette as the others
// (0 ink, 1 graphite, 2 gray); most move: a signal eye shimmers, a rocket
// burns, a campfire flickers, bubbles rise, a robot lifts its arm.

import { glucose, rng, scale } from './particle-kit/src/index.ts'
import { build, lerp, onBoxEdges, onBoxSurface, onLine, onRoundRect, onShell, type V } from './parts.ts'
import type { Figure } from './shapeshift.ts'

const TAU = Math.PI * 2
// ---- Work ---------------------------------------------------------------------------

/** Qualcomm: a chip package lying flat, die and bond wires on top, pins round the edge. */
function chip(n: number): Figure {
  const P = 0.62 // package half-size
  const D = 0.3 // die half-size
  const top = -0.05
  const pins = 11
  const form = build(n, 101, [
    {
      // Package: top face outline, sparse top, sides.
      share: 0.14,
      color: 0,
      size: 1.8,
      at(r, u, o) {
        const side = Math.floor(u * 4)
        const t = lerp(-P, P, (u * 4) % 1)
        const p: [number, number] = [[t, -P], [P, t], [t, P], [-P, t]][side] as [number, number]
        o.splice(0, 3, p[0], top, p[1])
      },
    },
    { share: 0.12, color: 2, at: (r, _u, o) => o.splice(0, 3, lerp(-P, P, r()), top, lerp(-P, P, r())) },
    { share: 0.06, color: 2, at: (r, _u, o) => (onBoxSurface(r, [0, 0, 0], [P, 0.05, P], o), (o[1] = lerp(top, 0.05, r()))) },
    {
      // The die: a raised square with a few functional blocks drawn on it.
      share: 0.2,
      color: 0,
      at(r, u, o) {
        const y = top - 0.05
        if (u < 0.4) {
          const side = Math.floor((u / 0.4) * 4)
          const t = lerp(-D, D, ((u / 0.4) * 4) % 1)
          const p = [[t, -D], [D, t], [t, D], [-D, t]][side]
          o.splice(0, 3, p[0], y, p[1])
          return
        }
        const blocks = [
          [-0.2, -0.17, 0.08, 0.1],
          [0.05, -0.17, 0.14, 0.1],
          [-0.2, 0.06, 0.08, 0.16],
          [0.05, 0.1, 0.14, 0.12],
        ]
        const [bx, bz, hw, hd] = blocks[Math.floor(r() * blocks.length)]
        const t = r() * 4
        const e = t % 1
        const p = t < 1 ? [lerp(-hw, hw, e), -hd] : t < 2 ? [hw, lerp(-hd, hd, e)] : t < 3 ? [lerp(-hw, hw, e), hd] : [-hw, lerp(-hd, hd, e)]
        o.splice(0, 3, bx + p[0], y, bz + p[1])
      },
    },
    { share: 0.1, color: 1, at: (r, _u, o) => o.splice(0, 3, lerp(-D, D, r()), top - 0.05, lerp(-D, D, r())) },
    {
      // Bond wires: little arcs from the die's edge out to pads on the package.
      share: 0.14,
      color: 1,
      size: 1.3,
      at(r, u, o) {
        const k = Math.floor(u * 32)
        const side = k % 4
        const s = lerp(-D * 0.85, D * 0.85, (Math.floor(k / 4) + 0.5) / 8)
        const t = r()
        const from = lerp(D, P * 0.84, t)
        const lift = Math.sin(Math.PI * t) * 0.09
        const p = [[s, -from], [from, s], [s, from], [-from, s]][side]
        o.splice(0, 3, p[0], top - 0.05 * (1 - t) - lift, p[1])
      },
    },
    {
      // Pins: out from each edge, then bent down.
      share: 0.24,
      color: 1,
      at(r, u, o) {
        const k = Math.floor(u * pins * 4)
        const side = k % 4
        const s = lerp(-P * 0.85, P * 0.85, (Math.floor(k / 4) + 0.5) / pins)
        const t = r()
        const out = t < 0.6 ? P + (t / 0.6) * 0.14 : P + 0.14
        const down = t < 0.6 ? 0.02 : 0.02 + ((t - 0.6) / 0.4) * 0.12
        const w = (r() - 0.5) * 0.035
        const p = [[s + w, -out], [out, s + w], [s + w, out], [-out, s + w]][side]
        o.splice(0, 3, p[0], down, p[1])
      },
    },
  ])
  return { form, sway: 0.45, pitch: 0.75 }
}

/** GlucoSolutions: the glucose molecule, straight from the kit. */
const molecule = (n: number): Figure => ({ form: scale(glucose(n), 1.3), spin: 0.04 })

/** Alphawave Semi: an eye diagram (many bits overlaid on one clock) and its mask. */
function eye(n: number): Figure {
  const TRACES = 48
  const r0 = rng(103)
  const traces = Array.from({ length: TRACES }, () => ({
    bits: [r0() < 0.5, r0() < 0.5, r0() < 0.5],
    jitter: (r0() - 0.5) * 0.08,
    noise: (r0() - 0.5) * 0.05,
    z: (r0() - 0.5) * 0.3,
    phase: r0() * TAU,
  }))
  const level = (b: boolean) => (b ? -0.46 : 0.46)
  const edge = (x: number, xc: number) => 1 / (1 + Math.exp(-(x - xc) / 0.07))
  const volt = (tr: (typeof traces)[number], x: number) => {
    const [a, b, c] = tr.bits.map(level)
    const e1 = edge(x, -0.55 + tr.jitter)
    const e2 = edge(x, 0.55 + tr.jitter)
    return a + (b - a) * e1 + (c - b) * e2 + tr.noise
  }
  const traceOf = new Int16Array(n).fill(-1)
  const mask: [number, number][] = [
    [-0.3, 0],
    [-0.14, -0.2],
    [0.14, -0.2],
    [0.3, 0],
    [0.14, 0.2],
    [-0.14, 0.2],
  ]
  const form = build(n, 104, [
    {
      share: 0.82,
      color: 1,
      size: 1.3,
      at(r, _u, o, i) {
        const k = Math.floor(r() * TRACES)
        const tr = traces[k]
        // Half the dots crowd the transitions, which are steep and would otherwise look sparse.
        const x = r() < 0.5 ? lerp(-1.1, 1.1, r()) : (r() < 0.5 ? -0.55 : 0.55) + tr.jitter + (r() - 0.5) * 0.36
        traceOf[i] = k
        o.splice(0, 3, x, volt(tr, x) + (r() - 0.5) * 0.012, tr.z)
      },
    },
    {
      // The mask the eye must stay clear of: a hexagon in ink.
      share: 0.18,
      color: 0,
      size: 1.9,
      at(r, u, o) {
        const f = u * 6
        const a = mask[Math.floor(f) % 6]
        const b = mask[(Math.floor(f) + 1) % 6]
        onLine([a[0], a[1], -0.2], [b[0], b[1], -0.2], f % 1, o, r, 0.006)
      },
    },
  ])
  return {
    form,
    sway: 0.3,
    move(t, j, p) {
      const k = traceOf[j]
      if (k < 0) return
      // A little timing jitter, so the crossings shimmer like a live scope.
      p[0] += Math.sin(t * 2.1 + traces[k].phase) * 0.012
    },
  }
}

/** Innovation Boost Zone: a rocket with its exhaust streaming out. */
function rocket(n: number): Figure {
  const exhaust = new Float32Array(n).fill(-1)
  const radius = (y: number) => {
    if (y < -0.45) return 0.19 * Math.sqrt(Math.max(0, (y + 0.9) / 0.45)) // nose
    if (y > 0.3) return lerp(0.19, 0.15, (y - 0.3) / 0.1)
    return 0.19
  }
  const form = build(n, 105, [
    {
      share: 0.4,
      color: 1,
      at(r, _u, o) {
        const y = lerp(-0.9, 0.4, r())
        const a = r() * TAU
        o.splice(0, 3, Math.cos(a) * radius(y), y, Math.sin(a) * radius(y))
      },
    },
    {
      // Two bands and a porthole in ink.
      share: 0.12,
      color: 0,
      size: 1.8,
      at(r, u, o) {
        if (u < 0.6) {
          const y = u < 0.3 ? -0.45 : 0.18
          const a = r() * TAU
          o.splice(0, 3, Math.cos(a) * 0.195, y + (r() - 0.5) * 0.02, Math.sin(a) * 0.195)
        } else {
          const a = r() * TAU
          const rr = r() < 0.5 ? 0.075 : 0.05
          o.splice(0, 3, Math.cos(a) * rr, -0.2 + Math.sin(a) * rr, -0.195)
        }
      },
    },
    {
      // Three fins.
      share: 0.14,
      color: 0,
      at(r, _u, o) {
        const f = Math.floor(r() * 3) * (TAU / 3) + Math.PI / 2
        const s = r()
        const t = r()
        const out = 0.19 + s * 0.2
        const y = lerp(0.05 + s * 0.2, 0.42, t)
        o.splice(0, 3, Math.cos(f) * out, y, Math.sin(f) * out)
      },
    },
    {
      // Nozzle.
      share: 0.04,
      color: 0,
      at(r, _u, o) {
        const y = lerp(0.4, 0.48, r())
        const a = r() * TAU
        const rr = lerp(0.1, 0.13, (y - 0.4) / 0.08)
        o.splice(0, 3, Math.cos(a) * rr, y, Math.sin(a) * rr)
      },
    },
    {
      share: 0.3,
      color: 2,
      at(r, _u, o, i) {
        exhaust[i] = r()
        o.splice(0, 3, (r() - 0.5) * 0.2, 0.5, (r() - 0.5) * 0.2)
      },
    },
  ])
  return {
    form,
    spin: 0.05,
    move(t, j, p) {
      const e = exhaust[j]
      if (e < 0) return
      // Each puff streams down and fans out, then starts again at the nozzle.
      const s = (t * 0.9 + e) % 1
      const spread = 1 + s * 3
      p[0] *= spread
      p[2] *= spread
      p[1] = 0.5 + s * 0.55
    },
  }
}

// ---- Milestones ---------------------------------------------------------------------

/** DMZ Basecamp: a tent and a campfire, flames flickering and sparks rising. */
function basecamp(n: number): Figure {
  const ground = 0.45
  const tent = { x: -0.3, ridge: -0.42, half: 0.56, front: -0.32, back: 0.36 }
  const fire: V = [0.58, ground, -0.05]
  // Flame and spark dots: their own phase and offset, placed in move.
  const flame = new Float32Array(n).fill(-1)
  const spark = new Uint8Array(n)
  const off = new Float32Array(n * 2)
  const slope = (v: number, side: number): [number, number] => [tent.x + side * tent.half * v, lerp(tent.ridge, ground, v)]
  const form = build(n, 112, [
    {
      // Canvas: the two sloped sides, lightly filled.
      share: 0.28,
      color: 2,
      at(r, _u, o) {
        const [x, y] = slope(r(), r() < 0.5 ? -1 : 1)
        o.splice(0, 3, x, y, lerp(tent.front, tent.back, r()))
      },
    },
    {
      // Ridge, front and back triangles, and the ground edges.
      share: 0.2,
      color: 0,
      size: 1.8,
      at(r, u, o) {
        const k = Math.floor(u * 8)
        const t = r()
        if (k === 0) return void o.splice(0, 3, tent.x, tent.ridge, lerp(tent.front, tent.back, t))
        if (k < 5) {
          const [x, y] = slope(t, k % 2 ? -1 : 1)
          return void o.splice(0, 3, x, y, k < 3 ? tent.front : tent.back)
        }
        if (k < 7) return void o.splice(0, 3, tent.x + (k === 5 ? -1 : 1) * tent.half, ground, lerp(tent.front, tent.back, t))
        const [x, y] = slope(t * 0.55, r() < 0.5 ? -1 : 1)
        o.splice(0, 3, x, y, tent.front - 0.005) // the door
      },
    },
    {
      // Guy lines out to the pegs.
      share: 0.04,
      color: 2,
      size: 1.2,
      at(r, _u, o) {
        const front = r() < 0.5
        const z = front ? tent.front : tent.back
        onLine([tent.x, tent.ridge, z], [tent.x, ground, z + (front ? -0.32 : 0.32)], r(), o, r, 0.004)
      },
    },
    {
      // Logs in a little teepee, and a ring of stones.
      share: 0.14,
      color: 1,
      at(r, u, o) {
        if (u < 0.6) {
          const a = Math.floor(r() * 4) * (TAU / 4) + 0.4
          const t = r()
          onLine([fire[0] + Math.cos(a) * 0.2, ground, fire[2] + Math.sin(a) * 0.2], [fire[0], ground - 0.16, fire[2]], t, o, r, 0.03)
        } else {
          const a = Math.floor(r() * 10) * (TAU / 10)
          onShell(r, [fire[0] + Math.cos(a) * 0.25, ground - 0.02, fire[2] + Math.sin(a) * 0.25], [0.04, 0.025, 0.04], o)
        }
      },
    },
    {
      share: 0.3,
      color: 0,
      size: 1.7,
      at(r, _u, o, i) {
        flame[i] = r()
        spark[i] = r() < 0.12 ? 1 : 0
        const a = r() * TAU
        const rr = Math.sqrt(r())
        off[i * 2] = Math.cos(a) * rr
        off[i * 2 + 1] = Math.sin(a) * rr
        o.splice(0, 3, fire[0], ground - 0.1, fire[2])
      },
    },
    {
      // A faint patch of ground.
      share: 0.04,
      color: 2,
      size: 1.2,
      at(r, _u, o) {
        o.splice(0, 3, lerp(-1, 1, r()), ground + 0.01, lerp(-0.45, 0.5, r()))
      },
    },
  ])
  return {
    form,
    sway: 0.4,
    pitch: 0.18,
    move(t, j, p) {
      const e = flame[j]
      if (e < 0) return
      if (spark[j]) {
        // Sparks drift up well above the flames.
        const s = (t * 0.45 + e) % 1
        p[0] = fire[0] + off[j * 2] * 0.1 + Math.sin(t * 2 + e * 40) * 0.06 * s
        p[1] = ground - 0.25 - s * 0.7
        p[2] = fire[2] + off[j * 2 + 1] * 0.1
        return
      }
      // Flames: rise fast, narrowing to a tip, with a flicker.
      const s = (t * 1.3 + e) % 1
      const width = 0.15 * Math.pow(1 - s, 0.7) * (0.8 + 0.2 * Math.sin(t * 9 + e * 13))
      p[0] = fire[0] + off[j * 2] * width + Math.sin(t * 5 + s * 4) * 0.025 * s
      p[1] = ground - 0.08 - s * 0.46
      p[2] = fire[2] + off[j * 2 + 1] * width
    },
  }
}

/** Game On, San Francisco: the Golden Gate Bridge. */
function bridge(n: number): Figure {
  const towerX = 0.52
  const topY = -0.78
  const deckY = 0.14
  const water = 0.5
  const W = 0.08
  const cable = (x: number) => {
    const a = Math.abs(x)
    if (a <= towerX) return topY + (deckY - 0.04 - topY) * (1 - (a / towerX) ** 2)
    // Side spans run down to the anchorages with a slight sag.
    const t = (a - towerX) / (1.18 - towerX)
    return lerp(topY, deckY - 0.02, t) + Math.sin(Math.PI * t) * 0.08
  }
  const form = build(n, 108, [
    {
      // Two towers: twin legs with portal struts between them.
      share: 0.3,
      color: 0,
      at(r, u, o) {
        const side = u < 0.5 ? -1 : 1
        if (r() < 0.78) {
          const leg = r() < 0.5 ? -1 : 1
          onBoxSurface(r, [side * towerX, (topY + water) / 2, leg * W], [0.03, (water - topY) / 2, 0.025], o)
        } else {
          const y = [topY + 0.03, -0.45, -0.15][Math.floor(r() * 3)]
          o.splice(0, 3, side * towerX + (r() - 0.5) * 0.05, y + (r() - 0.5) * 0.04, lerp(-W, W, r()))
        }
      },
    },
    {
      share: 0.24,
      color: 0,
      size: 1.8,
      at(r, _u, o) {
        const x = lerp(-1.18, 1.18, r())
        o.splice(0, 3, x, cable(x), r() < 0.5 ? -W : W)
      },
    },
    {
      // Suspenders from cable to deck.
      share: 0.16,
      color: 2,
      size: 1.3,
      at(r, _u, o) {
        const x = Math.round(lerp(-1.1, 1.1, r()) / 0.06) * 0.06
        o.splice(0, 3, x, lerp(cable(x), deckY, r()), r() < 0.5 ? -W : W)
      },
    },
    {
      share: 0.22,
      color: 1,
      at(r, _u, o) {
        const edge = r() < 0.75
        o.splice(0, 3, lerp(-1.2, 1.2, r()), deckY + (edge ? (r() < 0.5 ? 0 : 0.035) : r() * 0.035), edge ? (r() < 0.5 ? -W - 0.02 : W + 0.02) : lerp(-W, W, r()))
      },
    },
    {
      // A few lines of water.
      share: 0.08,
      color: 2,
      size: 1.2,
      at(r, _u, o) {
        const row = Math.floor(r() * 3)
        const x = lerp(-1.1, 1.1, r())
        o.splice(0, 3, x, water + row * 0.06 + Math.sin(x * 9 + row) * 0.01, lerp(-0.5, 0.5, r()))
      },
    },
  ])
  return { form, sway: 0.4, pitch: 0.08 }
}

/** The Residency, Biopunk: an Erlenmeyer flask with bubbles rising. */
function flask(n: number): Figure {
  const neckTop = -0.9
  const shoulder = -0.35
  const base = 0.62
  const radius = (y: number) => (y < shoulder ? 0.12 : lerp(0.12, 0.52, (y - shoulder) / (base - shoulder)))
  const liquid = 0.12
  const bubble = new Float32Array(n).fill(-1)
  const spot = new Float32Array(n * 2)
  const form = build(n, 109, [
    {
      share: 0.34,
      color: 1,
      at(r, _u, o) {
        const y = lerp(neckTop, base, Math.sqrt(r()) * 0.75 + r() * 0.25)
        const a = r() * TAU
        o.splice(0, 3, Math.cos(a) * radius(y), y, Math.sin(a) * radius(y))
      },
    },
    {
      // Rim, base and the liquid's surface, in ink.
      share: 0.16,
      color: 0,
      size: 1.8,
      at(r, u, o) {
        const a = r() * TAU
        const y = u < 0.2 ? neckTop : u < 0.55 ? base : liquid
        const rr = u < 0.2 ? 0.14 : radius(y)
        o.splice(0, 3, Math.cos(a) * rr, y, Math.sin(a) * rr)
      },
    },
    {
      // The liquid itself, a light fill.
      share: 0.22,
      color: 2,
      at(r, _u, o) {
        const y = lerp(liquid, base, r())
        const a = r() * TAU
        const rr = radius(y) * Math.sqrt(r()) * 0.96
        o.splice(0, 3, Math.cos(a) * rr, y, Math.sin(a) * rr)
      },
    },
    {
      share: 0.28,
      color: 0,
      at(r, _u, o, i) {
        const b = Math.floor(r() * 22)
        const br = rng(2000 + b)
        bubble[i] = br()
        const a = br() * TAU
        const rr = br() * 0.3
        spot[i * 2] = Math.cos(a) * rr
        spot[i * 2 + 1] = Math.sin(a) * rr
        const size = 0.02 + br() * 0.03
        onShell(r, [0, 0, 0], [size, size, size], o)
      },
    },
  ])
  return {
    form,
    sway: 0.35,
    move(t, j, p) {
      const b = bubble[j]
      if (b < 0) return
      // Rise from the bottom; the ones that clear the surface drift out of the neck.
      const s = (t * 0.22 + b) % 1
      const y = lerp(base - 0.06, neckTop - 0.1, s)
      const k = Math.min(1, radius(y) / 0.5)
      p[0] += spot[j * 2] * k + Math.sin(t * 3 + b * 30) * 0.015
      p[1] += y
      p[2] += spot[j * 2 + 1] * k
    },
  }
}

/** FIRST Robotics, 2nd in the world: a competition robot, arm and claw lifting a ball. */
function robot(n: number): Figure {
  const deck = 0.34
  const wheelY = 0.58
  const wheelR = 0.14
  const wheels: [number, number][] = [-0.38, 0, 0.38].flatMap((x): [number, number][] => [
    [x, -0.46],
    [x, 0.46],
  ])
  const shoulder: [number, number] = [-0.24, -0.34]
  const L1 = 0.46 // upper arm
  const L2 = 0.4 // forearm
  const elbow: [number, number] = [shoulder[0] + L1, shoulder[1]]
  const wrist: [number, number] = [elbow[0] + L2, elbow[1]]
  // Which part each dot belongs to: 1 upper arm, 2 forearm and claw, 3 + k wheel k.
  const part = new Uint8Array(n)
  const form = build(n, 113, [
    {
      // Bumpers: the padded band all round, the most recognisable bit of an FRC robot.
      share: 0.2,
      color: 0,
      size: 1.8,
      at(r, u, o) {
        onRoundRect(0.64, 0.54, 0.08, u, o)
        const x = o[0]
        const z = o[1]
        o.splice(0, 3, x, lerp(0.38, 0.52, r()), z)
      },
    },
    { share: 0.08, color: 1, at: (r, u, o) => onBoxEdges([0, (deck + 0.46) / 2, 0], [0.56, (0.46 - deck) / 2, 0.44], u, o, r) },
    {
      // Wheels: rims, hubs and spokes, each spinning about its axle.
      share: 0.16,
      color: 1,
      at(r, u, o, i) {
        const k = Math.min(5, Math.floor(u * 6))
        part[i] = 3 + k
        const [x, z] = wheels[k]
        const a = r() * TAU
        const pick = r()
        const rr = pick < 0.6 ? wheelR : pick < 0.72 ? 0.03 : r() * wheelR
        const ang = pick >= 0.72 ? Math.floor(a / (TAU / 5)) * (TAU / 5) : a
        o.splice(0, 3, x + Math.cos(ang) * rr, wheelY + Math.sin(ang) * rr, z + (r() - 0.5) * 0.05)
      },
    },
    {
      // Electronics on the deck: battery, controller, a couple of motors.
      share: 0.08,
      color: 2,
      at(r, _u, o) {
        const boxes: [V, V][] = [
          [[0.28, deck - 0.06, 0.18], [0.12, 0.06, 0.08]],
          [[0.3, deck - 0.03, -0.18], [0.1, 0.03, 0.12]],
          [[-0.38, deck - 0.05, 0.22], [0.05, 0.05, 0.05]],
          [[-0.38, deck - 0.05, -0.22], [0.05, 0.05, 0.05]],
        ]
        const [c, h] = boxes[Math.floor(r() * boxes.length)]
        onBoxSurface(r, c, h, o)
      },
    },
    {
      // The tower: two uprights and a brace.
      share: 0.08,
      color: 1,
      at(r, _u, o) {
        const z = r() < 0.5 ? -0.1 : 0.1
        if (r() < 0.8) onBoxSurface(r, [shoulder[0], (shoulder[1] + deck) / 2, z], [0.025, (deck - shoulder[1]) / 2, 0.025], o)
        else onLine([shoulder[0], deck, -0.1], [shoulder[0], shoulder[1] + 0.05, 0.1], r(), o, r, 0.01)
      },
    },
    {
      // A camera on top of the tower, looking forward: the robot's eye.
      share: 0.06,
      color: 0,
      size: 1.8,
      at(r, u, o) {
        const c: V = [shoulder[0] - 0.02, shoulder[1] - 0.14, 0]
        if (u < 0.55) return void onBoxSurface(r, c, [0.07, 0.045, 0.06], o)
        const a = r() * TAU
        const rr = r() < 0.6 ? 0.035 : 0.018
        o.splice(0, 3, c[0] + 0.071, c[1] + Math.sin(a) * rr, c[2] + Math.cos(a) * rr)
      },
    },
    {
      // Upper arm (twin bars) with round joints at both ends.
      share: 0.12,
      color: 0,
      at(r, u, o, i) {
        part[i] = 1
        if (u < 0.2) {
          const j = u < 0.1 ? shoulder : elbow
          const a = r() * TAU
          return void o.splice(0, 3, j[0] + Math.cos(a) * 0.045, j[1] + Math.sin(a) * 0.045, r() < 0.5 ? -0.07 : 0.07)
        }
        onBoxSurface(r, [shoulder[0] + L1 / 2, shoulder[1], r() < 0.5 ? -0.07 : 0.07], [L1 / 2, 0.02, 0.015], o)
      },
    },
    {
      // Forearm, a two-fingered claw, and the ball it's holding.
      share: 0.22,
      color: 0,
      at(r, u, o, i) {
        part[i] = 2
        if (u < 0.35) return void onBoxSurface(r, [elbow[0] + L2 / 2, elbow[1], 0], [L2 / 2, 0.02, 0.03], o)
        if (u < 0.55) {
          // Fingers: out and around the ball, top and bottom.
          const side = r() < 0.5 ? -1 : 1
          const t = r()
          const a = side * lerp(0.2, 1.3, t)
          return void o.splice(0, 3, wrist[0] + 0.12 - Math.cos(a) * 0.15, wrist[1] + Math.sin(a) * 0.15, (r() - 0.5) * 0.04)
        }
        onShell(r, [wrist[0] + 0.12, wrist[1], 0], [0.11, 0.11, 0.11], o)
      },
    },
  ])
  for (let i = 0; i < n; i++) form.y[i] -= 0.08
  const turn = (p: [number, number, number], c: [number, number], a: number) => {
    const dx = p[0] - c[0]
    const dy = p[1] - c[1]
    p[0] = c[0] + dx * Math.cos(a) - dy * Math.sin(a)
    p[1] = c[1] + dx * Math.sin(a) + dy * Math.cos(a)
  }
  const sh: [number, number] = [shoulder[0], shoulder[1] - 0.08]
  const el: [number, number] = [elbow[0], elbow[1] - 0.08]
  return {
    form,
    sway: 0.45,
    pitch: 0.28,
    move(t, j, p) {
      const k = part[j]
      if (k === 0) return
      if (k >= 3) {
        const [cx] = wheels[k - 3]
        return turn(p, [cx, wheelY - 0.08], t * 2.4)
      }
      // Reach up and straighten, pause, then fold back down.
      const w = Math.pow(0.5 - 0.5 * Math.cos(t * 1.1), 0.7)
      const a1 = -0.25 - 0.55 * w
      const a2 = 0.95 - 0.85 * w
      if (k === 2) turn(p, el, a2)
      turn(p, sh, a1)
    },
  }
}

export const WORK_FIGURES: Record<string, (n: number) => Figure> = {
  qualcomm: chip,
  gluco: molecule,
  alphawave: eye,
  ibz: rocket,
}

export const MILESTONE_FIGURES: Record<string, (n: number) => Figure> = {
  dmz: basecamp,
  gameon: bridge,
  residency: flask,
  first: robot,
}
