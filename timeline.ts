// The timeline: every dot leaves the face and lays itself out as a road
// through my life. A line of dots runs along the floor to the horizon with a
// stop for each chapter; the chapter you're at stands beside the road as a
// figure, and moving on sends its dots flowing ahead into the next one. Past
// "now" the road frays into faint paths that keep redrawing themselves,
// toward a sun that rises a little with every chapter and isn't up yet.

import { clamp01, easeInOut, emptyCloud, rng, smooth, type FrameInfo } from './particle-kit/src/index.ts'
import type { Chapter } from './data.ts'
import { poser, type Figure, type Place } from './shapeshift.ts'

// The kit's camera (engine.ts): perspective, and the opacity of the farthest dots.
const PERSPECTIVE = 3.4
const DEPTH_FLOOR = 0.2

const GAP = 4.2 // road between two chapters
const SKY = 30 // how far off the sun hangs; it never gets any closer
const ROWS = 26 // the sun is drawn in rows, like a scan
const BRANCHES = 5 // possible futures
const STAGGER = 0.5

const TAU = Math.PI * 2
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

/** Where the camera puts things on a w × h canvas; `tilt` (0–1) looks up toward the sun at the end. */
function frame(w: number, h: number, tilt: number) {
  const wide = w > 860
  const R = wide ? Math.min(h * 0.38, w * 0.3) : Math.min(h * 0.36, w * 0.62)
  const top = h * (wide ? 0.3 : 0.24) // the horizon
  const floor = h * (wide ? 0.64 : 0.6) // where the ground under the current chapter meets the screen
  return {
    wide,
    cx: w / 2,
    cy: top + h * (wide ? 0.13 : 0.08) * tilt,
    R,
    /** Ground height below the eye. */
    G: (floor - top) / R,
    /** How far figures stand off the road. */
    side: wide ? 0.95 : 0.2,
    /** Figure size. */
    size: wide ? 0.56 : 0.5,
    /** Things this close fade out: past the bottom of the screen, or on a phone, behind the card. */
    near: wide ? -1.5 : -0.35,
  }
}

const perspAt = (z: number) => PERSPECTIVE / (PERSPECTIVE + z)

/**
 * Write size and opacity so the engine draws the dot at `px` pixels and
 * `alpha` opacity wherever it is: the stage shrinks and fades dots with
 * depth, and this undoes that so the road can reach the horizon.
 */
function finish(o: Place, px: number, alpha: number) {
  if (o.z < -2.9) {
    o.z = -2.9
    alpha = 0
  }
  const front = clamp01((1 - o.z) / 2)
  o.s = px / (perspAt(o.z) * (0.8 + 0.4 * front))
  o.a = alpha / (DEPTH_FLOOR + (1 - DEPTH_FLOOR) * front)
}

export type TimelineOptions = {
  /** Dots on the stage. */
  n: number
  chapters: Chapter[]
  /** The figure for a chapter's `figure` id. */
  figure: (id: string) => Figure
  /** The timeline's section (rail, card, labels). */
  root: HTMLElement
  /** Redraw the stage; it doesn't animate on its own under reduced motion. */
  redraw: () => void
  /** Called on Escape. */
  onClose: () => void
}

export function timeline({ n, chapters, figure, root, redraw, onClose }: TimelineOptions) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const K = chapters.length
  const NOW = K - 2
  // Where each chapter sits along the road. "Next" is a little past "now".
  const Z = chapters.map((_, k) => (k <= NOW ? k * GAP : NOW * GAP + GAP * 0.8))
  const Z0 = -3 // the road starts just before the first chapter
  const zNow = Z[NOW]
  const sideOf = (k: number) => (k % 2 ? 1 : -1)

  // ---- Who does what ----------------------------------------------------------
  // Most dots make up the chapter figure; the rest are the road, a stop per
  // chapter, the forking paths past now, and the sun.
  const P = Math.round(n * 0.6)
  const L = Math.round(n * 0.12)
  const ND = Math.max(16, Math.round(n * 0.0066))
  const STOPS = (K - 1) * ND + 2 * ND // "now" gets three times as many, for its ping
  const BD = Math.round(n * 0.022)
  const SUN = n - P - L - STOPS - BRANCHES * BD
  const RING = Math.round(SUN * 0.08) // the faint ring round the sun
  const form = emptyCloud(n)

  const r = rng(29)
  const delay = new Float32Array(P)
  const sw = new Float32Array(P * 3)
  for (let j = 0; j < P; j++) {
    delay[j] = r() * STAGGER
    const a = r() * TAU
    const b = Math.acos(2 * r() - 1)
    sw[j * 3] = Math.sin(b) * Math.cos(a)
    sw[j * 3 + 1] = Math.sin(b) * Math.sin(a)
    sw[j * 3 + 2] = Math.cos(b)
  }
  const jitter = new Float32Array(n)
  for (let j = 0; j < n; j++) jitter[j] = r() - 0.5
  // A place in the sun for the dots that end up there: rows across the disc,
  // each getting dots in proportion to its width, evenly spaced along it.
  const sunRow = new Uint8Array(n)
  const sunX = new Float32Array(n)
  const widths = Array.from({ length: ROWS }, (_, i) => Math.sqrt(1 - (-1 + ((i + 0.5) * 2) / ROWS) ** 2))
  const wsum = widths.reduce((a, b) => a + b, 0)
  const lay = (from: number, count: number) => {
    let j = from
    let left = count
    widths.forEach((w, i) => {
      const m = i === ROWS - 1 ? left : Math.min(left, Math.round((count * w) / wsum))
      for (let q = 0; q < m; q++, j++) {
        sunRow[j] = i
        sunX[j] = ((q + 0.5) / m) * 2 - 1
      }
      left -= m
    })
  }
  lay(0, P) // the figure dots, which become the sun at the end
  lay(n - SUN + RING, SUN - RING) // the outline of it, there all along

  // Which of a chapter figure's dots each figure dot takes: an even sample of
  // the form (so every part of it shows), shuffled so dots cross over.
  const picks = new Map<string, Uint32Array>()
  const pickFor = (key: string, m: number) => {
    let p = picks.get(key)
    if (!p) {
      p = new Uint32Array(P)
      for (let i = 0; i < P; i++) p[i] = Math.floor(((i + 0.5) * m) / P)
      const rr = rng(key.length * 131 + key.charCodeAt(0))
      for (let i = P - 1; i > 0; i--) {
        const q = Math.floor(rr() * (i + 1))
        const t = p[i]
        p[i] = p[q]
        p[q] = t
      }
      picks.set(key, p)
    }
    return p
  }

  // ---- Camera ------------------------------------------------------------------
  let cam = 0 // where we are, in chapters
  let target = 0 // where we're headed
  let dir = 1
  let camX = 0 // a little sideways drift with the pointer
  let wantX = 0
  let travel = 0 // floor glide so far
  let lastAge = 0
  let prevZ = 0
  let born = performance.now() / 1000
  let v = frame(window.innerWidth, window.innerHeight, 0)
  /** Near and far fade (by depth from the camera). */
  const fog = (z: number) => smooth(v.near - 1.2, v.near, z) * (1 - 0.9 * smooth(2, 30, z))

  /** Road position of the camera for a chapter position. */
  const zAt = (c: number) => {
    const k = Math.max(0, Math.min(K - 2, Math.floor(c)))
    return Z[k] + (Z[k + 1] - Z[k]) * (c - k)
  }

  // Per-frame state shared by every dot.
  let T = 0
  let camZ = 0
  let tilt = 0
  let k0 = 0
  let k1 = 0
  let mu = 0
  const poseA = poser()
  const poseB = poser()
  let figA: Figure | null = null
  let figB: Figure | null = null
  let pickA: Uint32Array | null = null
  let pickB: Uint32Array | null = null
  // The sun: radius and height of its centre (positive is below the horizon),
  // how bright its outline is, and how far up it has been built (local y).
  let sunR = 3.3
  let sunY = 1.3
  let sunGlow = 0.35
  let front = 0
  let atEnd = 0 // seconds spent at the last chapter
  // Each forking path: where it bends to, how long, how far it has grown, how faded.
  const bx = new Float32Array(BRANCHES)
  const blen = new Float32Array(BRANCHES)
  const bbend = new Float32Array(BRANCHES)
  const bwob = new Float32Array(BRANCHES)
  const bhead = new Float32Array(BRANCHES)
  const bfade = new Float32Array(BRANCHES)

  const figureOf = (k: number) => (chapters[k].figure === 'sun' ? null : figure(chapters[k].figure))

  // ---- DOM ------------------------------------------------------------------------
  const card = root.querySelector<HTMLElement>('.tl-card')!
  const cardText = card.querySelector<HTMLElement>('.tl-text')!
  const num = card.querySelector<HTMLElement>('.tl-num')!
  const when = card.querySelector<HTMLElement>('.tl-when-text')!
  const title = card.querySelector<HTMLElement>('.tl-title')!
  const line = card.querySelector<HTMLElement>('.tl-line')!
  const prev = root.querySelector<HTMLButtonElement>('.tl-prev')!
  const next = root.querySelector<HTMLButtonElement>('.tl-next')!
  const restart = root.querySelector<HTMLButtonElement>('.tl-restart')!
  const rail = Array.from(root.querySelectorAll<HTMLButtonElement>('.tl-rail button'))
  const marks = root.querySelector<HTMLElement>('.tl-marks')!
  const labels = chapters.slice(0, K - 1).map((ch, k) => {
    const el = document.createElement('span')
    el.className = 'tl-mark'
    const b = document.createElement('b')
    b.textContent = String(k + 1).padStart(2, '0')
    el.append(b, ' ', ch.title)
    marks.append(el)
    return el
  })

  let shown = -1
  const showCard = (k: number) => {
    if (k === shown) return
    shown = k
    const ch = chapters[k]
    num.textContent = String(k + 1).padStart(2, '0')
    when.textContent = ch.when
    title.textContent = ch.title
    line.textContent = ch.line
    card.classList.toggle('last', k === K - 1)
    cardText.classList.remove('in')
    void cardText.offsetWidth
    cardText.classList.add('in')
    prev.disabled = k === 0
    next.disabled = k === K - 1
    rail.forEach((b, i) => {
      b.classList.toggle('past', i < k)
      if (i === k) b.setAttribute('aria-current', 'step')
      else b.removeAttribute('aria-current')
    })
  }
  showCard(0)

  // ---- Every frame ------------------------------------------------------------------
  const tick = (age: number, info: FrameInfo) => {
    T = performance.now() / 1000
    if (age < lastAge) lastAge = age
    const dt = Math.min(0.05, age - lastAge)
    lastAge = age
    if (reduce) {
      cam = target
      camX = 0
    } else {
      cam += (target - cam) * (1 - Math.exp(-dt * 2.3))
      if (Math.abs(target - cam) < 0.0004) cam = target
      camX += (wantX - camX) * (1 - Math.exp(-dt * 2.4))
    }
    const c = Math.max(0, Math.min(K - 1, cam))
    tilt = smooth(NOW, K - 1, c)
    v = frame(info.w, info.h, tilt)
    camZ = zAt(c)
    // Glide the floor with the road: its lines sit on the same ground.
    const kappa = (info.h - v.cy) / (v.G * v.R * PERSPECTIVE)
    travel += ((camZ - prevZ) * kappa) / (0.55 * 2.4)
    prevZ = camZ

    k0 = Math.min(K - 1, Math.floor(c))
    k1 = Math.min(K - 1, k0 + 1)
    mu = k0 === k1 ? 0 : smooth(0.12, 0.88, c - k0)
    figA = figureOf(k0)
    figB = figureOf(k1)
    if (figA) {
      poseA.frame(figA, T, born)
      pickA = pickFor(chapters[k0].figure + figA.form.n, figA.form.n)
    }
    if (figB) {
      poseB.frame(figB, T, born)
      pickB = pickFor(chapters[k1].figure + figB.form.n, figB.form.n)
    }

    // The sun comes up a little with every chapter. At the end it's being
    // built: rows settle from the horizon up, and the build line creeps
    // toward the top without ever getting there.
    const prog = c / (K - 1)
    sunR = lerp(3.3, 5.2, prog)
    sunY = lerp(0.42, -0.24, prog) * sunR
    sunGlow = lerp(0.3, 0.5, prog)
    atEnd = c > K - 1.5 ? atEnd + dt : 0
    const cut = Math.min(1, -sunY / sunR) // where the horizon crosses the disc
    const built = reduce ? 0.75 : 0.5 + 0.38 * (1 - Math.exp(-atEnd / 12)) + 0.02 * Math.sin(T * 0.5)
    front = cut - (cut + 1) * built

    // The paths past now: each grows from "now" like a pen stroke, holds,
    // fades, and grows again somewhere else.
    for (let b = 0; b < BRANCHES; b++) {
      const per = 7.5 + b * 1.3
      const tt = (reduce ? 3 : T) / per + b * 0.37
      const q = Math.floor(tt)
      const ph = tt - q
      const rb = rng(q * 31 + b * 977 + 5)
      // Fanned out in order, so they never cross.
      bx[b] = (b - (BRANCHES - 1) / 2) * 1.9 + (rb() - 0.5) * 1.1
      blen[b] = 12 + rb() * 14
      bbend[b] = 1.3 + rb() * 0.9
      bwob[b] = (rb() - 0.5) * 0.5
      bhead[b] = reduce ? 1 : 1 - Math.pow(1 - clamp01(ph / 0.55), 2)
      bfade[b] = reduce ? 1 : smooth(0, 0.04, ph) * (1 - smooth(0.78, 1, ph))
    }

    // Card and labels.
    showCard(Math.max(0, Math.min(K - 1, Math.round(cam))))
    if (v.wide) {
      for (let k = 0; k < K - 1; k++) {
        const zv = Z[k] - camZ
        const op = zv > 0.5 ? smooth(1.2, 2.6, zv) * (1 - smooth(GAP * 2.2, GAP * 3.2, zv)) : 0
        const el = labels[k]
        if (op < 0.01) {
          if (el.style.visibility !== 'hidden') el.style.visibility = 'hidden'
          continue
        }
        const p = perspAt(zv) * info.radius
        const x = info.cx + (0 - camX) * p
        const y = info.cy + v.G * p
        el.style.visibility = 'visible'
        el.style.opacity = op.toFixed(3)
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(${sideOf(k) < 0 ? 'calc(-100% - 12px)' : '12px'}, -50%)`
      }
    }
  }

  // ---- Every dot ----------------------------------------------------------------
  const v3: [number, number, number] = [0, 0, 0]
  const put = (o: Place, x: number, y: number, zv: number, c: number) => {
    o.x = x - camX
    o.y = y
    o.z = zv
    o.c = c
  }

  /** One dot of chapter k's figure (or of the sun, for the last chapter): position, px, alpha and colour into `out2`. */
  const out2 = { px: 0, a: 0, x: 0, y: 0, z: 0, c: 0 }
  const figureDot = (k: number, j: number, fig: Figure | null, pose: ReturnType<typeof poser>, pick: Uint32Array | null) => {
    if (!fig || !pick) {
      // The sun, still being built. Dots below the build line sit in their
      // rows; above it they drift loose near where they'll go, and settle as
      // the line reaches them.
      sunDot(j, 0.95, 1.7, false)
      const yl = -1 + ((sunRow[j] + 0.5) * 2) / ROWS
      const d = yl - front + (delay[j] / STAGGER - 0.5) * 0.14 + (reduce ? 0 : Math.sin(T * 0.9 + j) * 0.025)
      const set = easeInOut(smooth(-0.03, 0.12, d))
      if (set < 1) {
        const t = reduce ? 0 : T * 0.35 + delay[j] * 20
        const lx = out2.x + (sw[j * 3] * 0.12 + Math.sin(t) * 0.035) * sunR
        const ly = out2.y + (sw[j * 3 + 1] * 0.1 - 0.06 + Math.cos(t * 1.3) * 0.03) * sunR
        out2.x = lerp(lx, out2.x, set)
        out2.y = lerp(Math.min(ly, -0.02 * sunR), out2.y, set)
        out2.z = SKY + sw[j * 3 + 2] * 3 * (1 - set)
        out2.px = lerp(1.3, 1.7, set)
        out2.a = lerp(0.42, out2.a, set)
      }
      return
    }
    const idx = pick[j]
    pose.dot(idx, v3)
    const s = v.size
    const zc = Z[k] - camZ
    out2.x = sideOf(k) * v.side + v3[0] * s
    out2.y = v.G - s * 0.95 + v3[1] * s
    out2.z = zc + v3[2] * s
    const f = fig.form
    // Shade by depth within the figure, as the stage would at the middle of the room.
    const near = clamp01((1 - (out2.z - zc)) / 2)
    const sz = (f.s ? f.s[idx] : 1.7) * perspAt(out2.z) * (0.8 + 0.4 * near)
    out2.px = Math.max(0.85, sz)
    // Nothing shows through the floor (a rocket's exhaust, say).
    out2.a = (f.a ? f.a[idx] : 1) * ((DEPTH_FLOOR + (1 - DEPTH_FLOOR) * near) / 0.6) * fog(zc) * (1 - smooth(v.G, v.G + 0.1, out2.y))
    out2.c = f.c[idx]
  }

  /** A dot of the sun (always SKY away), into out2. */
  const sunDot = (j: number, glow: number, px: number, corona: boolean) => {
    let x: number
    let y: number
    let a: number
    if (corona) {
      const th = jitter[j] * TAU + T * 0.012
      const rr = 1.2 + jitter[(j + 7) % n] * 0.05
      x = Math.cos(th) * rr * sunR
      y = sunY + Math.sin(th) * rr * sunR
      a = 0.32 * glow
    } else {
      const yl = -1 + ((sunRow[j] + 0.5) * 2) / ROWS
      x = sunX[j] * Math.sqrt(1 - yl * yl) * sunR
      y = sunY + yl * sunR
      // A slow shimmer running up the disc, and a softer lower half.
      a = glow * (0.82 + 0.18 * Math.sin(yl * 9 + T * 1.6)) * (1 - 0.5 * smooth(-0.3, 1, yl))
    }
    // Below the horizon it's hidden by the ground.
    a *= 1 - smooth(-0.04 * sunR, 0.01 * sunR, y)
    x += jitter[j] * 0.006 * sunR
    out2.x = x
    out2.y = y
    out2.z = SKY
    out2.px = px
    out2.a = a
    out2.c = corona ? 2 : 0
  }

  const place = (_t: number, j: number, o: Place) => {
    // Figure dots: at chapter k0, flowing on to k1 as the camera moves.
    if (j < P) {
      const e = mu <= 0 ? 0 : easeInOut(clamp01(mu * (1 + STAGGER) - delay[j]))
      if (e < 1) figureDot(k0, j, figA, poseA, pickA)
      if (e <= 0) {
        put(o, out2.x, out2.y, out2.z, out2.c)
        return finish(o, out2.px, out2.a)
      }
      const ax = out2.x
      const ay = out2.y
      const az = out2.z
      const apx = out2.px
      const aa = out2.a
      const ac = out2.c
      figureDot(k1, j, figB, poseB, pickB)
      if (e >= 1) {
        put(o, out2.x, out2.y, out2.z, out2.c)
        return finish(o, out2.px, out2.a)
      }
      // Mid-flight: an arc up and over, with a little swirl.
      const lift = Math.sin(Math.PI * e)
      put(
        o,
        lerp(ax, out2.x, e) + sw[j * 3] * lift * 0.5,
        lerp(ay, out2.y, e) + sw[j * 3 + 1] * lift * 0.35 - lift * 0.9,
        lerp(az, out2.z, e) + sw[j * 3 + 2] * lift * 0.5,
        e < 0.5 ? ac : out2.c
      )
      return finish(o, lerp(apx, out2.px, e), lerp(aa, out2.a, e))
    }
    j -= P

    // The road: ink where you've been, softer ahead.
    if (j < L) {
      const zw = Z0 + ((j + 0.5) / L) * (zNow - Z0)
      const zv = zw - camZ
      put(o, jitter[j] * 0.012, v.G, zv, zw <= camZ + 0.05 ? 0 : 1)
      const a = 0.85 * fog(zv) * smooth(Z0, Z0 + 2.2, zw)
      return finish(o, Math.min(3.2, Math.max(0.9, 2.1 * perspAt(Math.max(zv, -2.5)))), a)
    }
    j -= L

    // A stop per chapter: a ring on the road and a spur out to the figure.
    // "Now" also pings, like a you-are-here.
    if (j < STOPS) {
      const k = Math.min(NOW, Math.floor(j / ND))
      const m = k === NOW ? ND * 3 : ND
      const u = ((j - k * ND) + 0.5) / m
      const zk = Z[k]
      let x: number
      let zw: number
      let a = 0.85
      let rr = 0.15
      if (u < 0.45) {
        let t = u / 0.45
        if (k === NOW && t > 0.34 && !reduce) {
          // Two rings spreading out from here and fading, one after the other.
          const w = (t - 0.34) / 0.66
          const ph = (T * 0.4 + (w < 0.5 ? 0 : 0.5)) % 1
          t = (w * 2) % 1
          rr = 0.15 + ph * 0.6
          a *= Math.pow(1 - ph, 1.5)
        }
        x = Math.cos(t * TAU) * rr
        zw = zk + Math.sin(t * TAU) * rr
      } else {
        x = ((u - 0.45) / 0.55) * sideOf(k) * v.side * 0.85
        zw = zk
        a *= 0.7
      }
      const zv = zw - camZ
      put(o, x, v.G, zv, zk <= camZ + 0.05 ? 0 : 1)
      return finish(o, Math.min(3.2, Math.max(1, 2.3 * perspAt(Math.max(zv, -2.5)))), a * fog(zv))
    }
    j -= STOPS

    // Past now: faint paths forking toward the horizon, each drawn by a pen tip.
    if (j < BRANCHES * BD) {
      const b = Math.floor(j / BD)
      const u = ((j % BD) + 0.5) / BD
      const head = bhead[b]
      const uu = Math.min(u, head)
      const x = bx[b] * Math.pow(uu, bbend[b]) + bwob[b] * Math.sin(uu * Math.PI)
      const zw = zNow + 0.25 + uu * blen[b]
      const zv = zw - camZ
      const tip = u <= head && u > head - 1.5 / BD
      // Dashes marching outward.
      const march = reduce ? 0.8 : 0.55 + 0.45 * Math.sin(TAU * (uu * blen[b] * 0.8 - T * 0.7))
      const a = u > head ? 0 : bfade[b] * fog(zv) * (tip ? 1 : 0.8 * march) * smooth(0, 0.06, u)
      put(o, x, v.G, zv, tip ? 0 : 1)
      return finish(o, Math.min(3.6, Math.max(1, (tip ? 3.2 : 2.1) * perspAt(Math.max(zv, -2.5)))), a)
    }
    j -= BRANCHES * BD

    // The sun's outline, low on the horizon, with a faint ring around it.
    sunDot(n - SUN + j, sunGlow, 1.5, j < RING)
    put(o, out2.x, out2.y, out2.z, out2.c)
    finish(o, out2.px, out2.a)
  }

  const fig: Figure = { form, place, tick }

  // ---- Moving through it -------------------------------------------------------------
  let open = false
  let idle = 0
  const kick = () => {
    if (reduce) redraw()
    root.classList.toggle('moved', target > 0.02)
  }
  const settle = () => {
    target = Math.max(0, Math.min(K - 1, Math.round(target + 0.38 * dir)))
    kick()
  }
  const nudge = (d: number) => {
    if (!d) return
    target = Math.max(-0.35, Math.min(K - 1 + 0.35, target + d))
    dir = Math.sign(d)
    clearTimeout(idle)
    idle = window.setTimeout(settle, reduce ? 0 : 170)
    kick()
  }
  const go = (k: number) => {
    clearTimeout(idle)
    dir = Math.sign(k - target) || dir
    target = Math.max(0, Math.min(K - 1, k))
    kick()
  }
  const step = (d: number) => go(Math.round(target) + d)

  const onWheel = (e: WheelEvent) => {
    e.preventDefault()
    const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1
    const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
    nudge((d * unit) / 520)
  }
  const onKey = (e: KeyboardEvent) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return
    const onButton = (e.target as HTMLElement).closest?.('button, a')
    if (onButton && (e.key === ' ' || e.key === 'Enter')) return
    if (e.key === 'Escape') onClose()
    else if (['ArrowDown', 'ArrowRight', 'PageDown', ' ', 'j'].includes(e.key)) step(1)
    else if (['ArrowUp', 'ArrowLeft', 'PageUp', 'k'].includes(e.key)) step(-1)
    else if (e.key === 'Home') go(0)
    else if (e.key === 'End') go(K - 1)
    else return
    e.preventDefault()
  }
  // Drag (touch, or a mouse if you like): up is forward, like scrolling.
  let drag: { id: number; x: number; y: number; t: number } | null = null
  const onDown = (e: PointerEvent) => {
    if ((e.target as HTMLElement).closest('button, a') || e.button > 0) return
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, t: target }
    root.setPointerCapture(e.pointerId)
  }
  const onDrag = (e: PointerEvent) => {
    if (e.pointerType === 'mouse') wantX = (e.clientX / window.innerWidth - 0.5) * 0.18
    if (!drag || e.pointerId !== drag.id) return
    const dy = drag.y - e.clientY
    const dx = drag.x - e.clientX
    const d = (Math.abs(dx) > Math.abs(dy) ? dx : dy) / (window.innerHeight * 0.4)
    const before = target
    target = Math.max(-0.35, Math.min(K - 1 + 0.35, drag.t + d))
    if (target !== before) dir = Math.sign(target - before)
    kick()
  }
  const onUp = (e: PointerEvent) => {
    if (!drag || e.pointerId !== drag.id) return
    drag = null
    settle()
  }

  prev.addEventListener('click', () => step(-1))
  next.addEventListener('click', () => step(1))
  restart.addEventListener('click', () => go(0))
  rail.forEach((b, k) => b.addEventListener('click', () => go(k)))

  return {
    /** Show this on the stage to lay the dots out as the timeline. */
    figure: fig,
    /** Where the camera sits on a w × h canvas right now, and the floor's horizon (0–1 down). */
    view(w: number, h: number) {
      const f = frame(w, h, tilt)
      return { cx: f.cx, cy: f.cy, radius: f.R, horizon: f.cy / h }
    },
    /** How far the floor has glided (kit glide units) since the timeline was made. */
    travelled: () => travel,
    get isOpen() {
      return open
    },
    open() {
      if (open) return
      open = true
      born = performance.now() / 1000
      lastAge = 0
      prevZ = camZ
      root.inert = false
      window.addEventListener('wheel', onWheel, { passive: false })
      document.addEventListener('keydown', onKey)
      root.addEventListener('pointerdown', onDown)
      window.addEventListener('pointermove', onDrag)
      window.addEventListener('pointerup', onUp)
      window.addEventListener('pointercancel', onUp)
    },
    close() {
      if (!open) return
      open = false
      clearTimeout(idle)
      drag = null
      root.inert = true
      window.removeEventListener('wheel', onWheel)
      document.removeEventListener('keydown', onKey)
      root.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onDrag)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
    },
  }
}
