import { clamp01, easeInOut, isDark, mountStage, onThemeChange, setTheme, sphere, type ThemedPalette } from './particle-kit/src/index.ts'
import { MILESTONE_FIGURES, WORK_FIGURES } from './career-shapes.ts'
import { FACTS } from './data.ts'
import { LIFE_FIGURES, THEMED } from './life-shapes.ts'
import { loadImage, portrait } from './portrait.ts'
import { PROJECT_FIGURES } from './project-shapes.ts'
import { shapeshift, type Figure } from './shapeshift.ts'

// Ink on white by day, chalk on charcoal at night: 0 strongest, 1 mid, 2 soft.
const palette: ThemedPalette = {
  light: ['#0a0a0a', '#4a4a47', '#9d9d98'],
  dark: ['#f2f1ed', '#b3b2ac', '#6f6e69'],
}

const canvas = document.getElementById('stage') as HTMLCanvasElement
const slot = document.getElementById('slot')!
const caption = document.getElementById('caption')!
const lists = document.querySelector<HTMLElement>('.lists')!
const items = Array.from(lists.querySelectorAll<HTMLElement>('.row[data-id]'))

const small = window.matchMedia('(max-width: 860px)').matches
const N = small ? 2800 : 5200
const canHover = window.matchMedia('(hover: hover)').matches

// ---- Placement: the dots fill the middle slot, above the caption ------------
let cx = 0
let cy = 0
let radius = 100
// Two portraits: dark dots where the photo is dark for the light page, light
// dots where it is light for the dark page, so it's never a negative.
let faces: { light: Figure; dark: Figure } | null = null
// The photo is cropped tight to the head; this keeps the head about the size
// it was with the looser head-and-shoulders crop.
const FACE_SCALE = 0.8
const face = () => (faces ? (isDark() ? faces.dark : faces.light) : null)
const measure = () => {
  const s = slot.getBoundingClientRect()
  const room = s.height - caption.offsetHeight - 20
  cx = s.left + s.width / 2
  cy = s.top + room / 2
  radius = Math.max(40, Math.min(s.width * (small ? 0.37 : 0.4), room * 0.46))
}
measure()
window.addEventListener('resize', measure)

// The floor glides forward one row each time the dots fly somewhere new.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const ROW = 1 / 2.4 // the kit's floor repeats every 1/2.4 of glide
let glideFrom = 0
let glideTo = 0
let glideAt = 0
const glide = () => {
  const k = easeInOut(clamp01((performance.now() / 1000 - glideAt) / 1.5))
  return glideFrom + (glideTo - glideFrom) * k
}
const advanceFloor = () => {
  if (reduce) return
  glideFrom = glide()
  glideTo += ROW
  glideAt = performance.now() / 1000
}

const shift = shapeshift(N, { lean: 0.22, center: () => [cx, cy], radius: () => radius })
const stage = mountStage(canvas, shift.scene, {
  palette,
  pointerArea: document.body,
  repelRadius: small ? 60 : 85,
  floor: { horizon: small ? 0.64 : 0.7, glide },
})

// ---- Figures ---------------------------------------------------------------
const BUILDERS: Record<string, (n: number, dark?: boolean) => Figure> = {
  ...WORK_FIGURES,
  ...PROJECT_FIGURES,
  ...LIFE_FIGURES,
  ...MILESTONE_FIGURES,
}
const figures = new Map<string, Figure>()
const figureFor = (id: string) => {
  // Themed figures are stippled per theme, so they're cached per theme too.
  const key = THEMED.has(id) ? `${id}:${isDark() ? 'dark' : 'light'}` : id
  let f = figures.get(key)
  if (!f) figures.set(key, (f = BUILDERS[id](N, isDark())))
  return f
}

let active: string | null = null

const show = (f: Figure, time?: number) => {
  shift.show(f, time)
  advanceFloor()
  stage.redraw()
}

// Dust gathers into my face on arrival.
loadImage('/assets/portrait.jpg')
  .then((img) => ({
    light: { form: portrait(N, img), sway: 0.16, scale: FACE_SCALE },
    dark: { form: portrait(N, img, { ink: false }), sway: 0.16, scale: FACE_SCALE },
  }))
  .catch(() => {
    const f: Figure = { form: sphere(N), spin: 0.03 }
    return { light: f, dark: f }
  })
  .then((f) => {
    faces = f
    if (!active) show(face()!, 2.4)
    // Build the rest while the page is idle, so the first hover is instant.
    const idle = window.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 200))
    const ids = items.map((a) => a.dataset.id!)
    const next = () => {
      const id = ids.shift()
      if (!id) return
      figureFor(id)
      idle(next)
    }
    idle(next)
  })

// ---- Caption: the chosen thing, or a rotating line about me ------------------
const hint = Array.from(caption.childNodes).map((c) => c.cloneNode(true))
const idleLines: (string | null)[] = [null, ...FACTS] // null is the hover hint
let idleIndex = 0

const setCaption = (a: HTMLElement | null) => {
  caption.classList.remove('in')
  void caption.offsetWidth
  caption.replaceChildren()
  if (a) {
    caption.setAttribute('aria-live', 'polite')
    const b = document.createElement('b')
    b.textContent = a.querySelector('.title')!.textContent + ' · ' + a.dataset.tag
    caption.append(b, a.dataset.line ?? '')
  } else {
    // The rotating lines are decoration; don't announce each one.
    caption.setAttribute('aria-live', 'off')
    const line = idleLines[idleIndex]
    if (line === null) caption.append(...hint.map((c) => c.cloneNode(true)))
    else caption.append(line)
  }
  caption.classList.add('in')
}
setInterval(() => {
  if (active || document.hidden) return
  idleIndex = (idleIndex + 1) % idleLines.length
  setCaption(null)
}, 5500)

// ---- Choosing something to show ----------------------------------------------
const select = (id: string | null) => {
  if (id === active) return
  active = id
  const a = items.find((x) => x.dataset.id === id) ?? null
  items.forEach((x) => x.classList.toggle('active', x === a))
  lists.querySelectorAll('.list').forEach((l) => l.classList.toggle('has-active', Boolean(a && l.contains(a))))
  if (!a) idleIndex = 0
  setCaption(a)
  if (id) show(figureFor(id))
  else if (face()) show(face()!, 1.6)
}

// Mouse: follow hover, with a short grace period so sweeping across rows (or
// slipping off the list for a moment) doesn't thrash the dots.
let timer = 0
const later = (id: string | null, ms: number) => {
  clearTimeout(timer)
  timer = window.setTimeout(() => select(id), ms)
}
items.forEach((a) => {
  const id = a.dataset.id!
  a.addEventListener('pointerenter', (e) => {
    if (e.pointerType === 'mouse' || e.pointerType === 'pen') later(id, 70)
  })
  a.addEventListener('focus', () => {
    clearTimeout(timer)
    select(id)
  })
  a.addEventListener('click', (e) => {
    if (canHover) return
    // Touch: the first tap on a project shows it and the second opens it;
    // life rows (no link) toggle.
    if (a instanceof HTMLAnchorElement) {
      if (active !== id) {
        e.preventDefault()
        select(id)
      }
    } else select(active === id ? null : id)
  })
})
lists.addEventListener('pointerleave', (e) => {
  if (e.pointerType === 'mouse' || e.pointerType === 'pen') later(null, 260)
})
lists.addEventListener('focusout', (e) => {
  if (!lists.contains(e.relatedTarget as Node)) later(null, 120)
})
// Tapping anywhere else brings the face back.
const work = document.querySelector('.work')!
document.addEventListener('click', (e) => {
  if (!canHover && !work.contains(e.target as Node)) select(null)
})
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    ;(document.activeElement as HTMLElement | null)?.blur()
    select(null)
  }
})

// ---- Work / Life tabs ---------------------------------------------------------
const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>('[role="tab"]'))
const openTab = (tab: HTMLButtonElement, focus = false) => {
  tabs.forEach((t) => {
    const on = t === tab
    t.setAttribute('aria-selected', String(on))
    t.tabIndex = on ? 0 : -1
    document.getElementById(t.getAttribute('aria-controls')!)!.toggleAttribute('inert', !on)
  })
  if (focus) tab.focus()
  clearTimeout(timer)
  select(null)
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => openTab(t))
  t.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault()
      openTab(tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length], true)
    }
  })
})

// ---- Light / dark ------------------------------------------------------------
const toggle = document.getElementById('theme')!
const themeColor = document.querySelector('meta[name="theme-color"]')!
const syncTheme = () => {
  const dark = isDark()
  toggle.setAttribute('aria-pressed', String(dark))
  toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode')
  themeColor.setAttribute('content', dark ? '#0f0f10' : '#ffffff')
}
syncTheme()
toggle.addEventListener('click', () => setTheme(isDark() ? 'light' : 'dark'))
onThemeChange(() => {
  syncTheme()
  // The face (or a themed figure) re-forms for the other theme.
  if (!active && face()) show(face()!, 1.4)
  else if (active && THEMED.has(active)) show(figureFor(active), 1.4)
})
// Follow the system setting until the visitor picks one.
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  let saved: string | null = null
  try {
    saved = localStorage.getItem('theme')
  } catch {}
  if (!saved) document.documentElement.dataset.theme = e.matches ? 'dark' : 'light'
})
