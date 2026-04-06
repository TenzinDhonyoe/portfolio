import { createECG, drawECG, setBPM, shock, type ECGState } from './ecg-animated.ts'
import { createHelix, tickHelix, setHelixScroll, type HelixState } from './dna-helix.ts'
import { drawMiniSignal, initSimEvents } from './mini-signals.ts'
import { HEADLINE_TEXT, SUBTITLE_TEXT, BIO_TEXT, PROJECTS, LINKS } from './data.ts'

// ---- State ----
let ecg: ECGState
let stripEcg: ECGState
let helix: HelixState | null = null
let lastTs = 0
let mouseX = -1
let mouseY = -1
let bootDone = false
let bootSkipResolve: (() => void) | null = null
let typewriterStart = 0
let signalCanvases: HTMLCanvasElement[] = []
const ACCENT = '#00e676'
const ACCENT_WARN = '#ff6d3a'

// ---- Boot Sequence ----
const BOOT_LINES = [
  '> INITIALIZING BIOSCAN...',
  '> LOADING BIOMETRIC MODULES...',
  `> SUBJECT IDENTIFIED: ${HEADLINE_TEXT}`,
  '> CALIBRATING SENSORS... DONE',
  '> ENTERING MONITORING MODE',
]

function finishBoot(): void {
  document.getElementById('boot')!.classList.add('done')
  bootDone = true
  if (bootSkipResolve) { bootSkipResolve(); bootSkipResolve = null }
}

function runBootSequence(): Promise<void> {
  return new Promise(resolve => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finishBoot()
      resolve()
      return
    }
    bootSkipResolve = resolve

    // Show skip hint after 0.8s
    setTimeout(() => {
      document.getElementById('boot-skip')?.classList.add('visible')
    }, 800)

    // Skip on keypress or click
    const skip = () => {
      document.removeEventListener('keydown', skip)
      document.removeEventListener('click', skip)
      finishBoot()
    }
    document.addEventListener('keydown', skip, { once: true })
    document.addEventListener('click', skip, { once: true })

    const container = document.getElementById('boot-text')!
    let i = 0
    const showNext = () => {
      if (bootDone) return // already skipped
      if (i >= BOOT_LINES.length) {
        setTimeout(() => {
          if (!bootDone) { finishBoot() }
        }, 400)
        return
      }
      const line = document.createElement('div')
      line.className = 'boot-line'
      line.textContent = BOOT_LINES[i]!
      if (i === BOOT_LINES.length - 1) {
        const cursor = document.createElement('span')
        cursor.className = 'boot-cursor'
        line.appendChild(cursor)
      }
      container.appendChild(line)
      requestAnimationFrame(() => line.classList.add('visible'))
      i++
      setTimeout(showNext, 350 + Math.random() * 200)
    }
    showNext()
  })
}

// ---- Build Hero ----
function buildVitals(): void {
  const vitals = document.getElementById('vitals')!
  const rows = [
    { label: 'HR', id: 'v-hr', value: '72', unit: 'bpm' },
    { label: 'SpO2', id: 'v-spo2', value: '98', unit: '%' },
    { label: 'BP', id: 'v-bp', value: '120/80', unit: '' },
    { label: 'RESP', id: 'v-resp', value: '16', unit: '/min' },
  ]
  for (const row of rows) {
    const div = document.createElement('div')
    div.className = 'vital-row'
    div.innerHTML = `<span class="vital-label">${row.label}</span> <span class="vital-value" id="${row.id}">${row.value}</span><span class="vital-label">${row.unit}</span>`
    vitals.appendChild(div)
  }
}

function buildLinks(): void {
  const container = document.getElementById('hero-links')!
  const icons: Record<string, string> = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
  }
  for (const link of LINKS) {
    const a = document.createElement('a')
    a.href = link.url
    a.target = '_blank'
    a.rel = 'noopener'
    a.className = 'hero-link'
    a.innerHTML = `${icons[link.icon] || ''}${link.label}`
    container.appendChild(a)
  }
}

function buildProjectCards(): void {
  const grid = document.getElementById('project-grid')!
  for (const project of PROJECTS) {
    const card = document.createElement('div')
    card.className = 'project-card'
    card.innerHTML = `
      <span class="scan-label">SCAN COMPLETE</span>
      <div class="card-status">
        <span class="status-dot"></span>
        <span class="card-tag">${project.tag}</span>
      </div>
      <div class="card-title">${project.title}</div>
      <div class="card-desc">${project.text}</div>
      <canvas class="card-signal" data-signal="${project.id}"></canvas>
      <a href="${project.url}" target="_blank" rel="noopener" class="card-link">VIEW PROJECT</a>
    `
    grid.appendChild(card)
  }
}

// ---- Vitals Animation ----
let vitalsTick = 0
function updateVitals(bpm: number): void {
  const hrEl = document.getElementById('v-hr')
  const spo2El = document.getElementById('v-spo2')
  const bpEl = document.getElementById('v-bp')
  const respEl = document.getElementById('v-resp')
  if (!hrEl) return

  vitalsTick++
  const jitter = () => Math.round((Math.random() - 0.5) * 2)

  hrEl.textContent = String(Math.round(bpm))
  hrEl.style.color = bpm > 100 ? ACCENT_WARN : ACCENT

  if (vitalsTick % 30 === 0) {
    spo2El!.textContent = String(97 + Math.round(Math.random() * 2))
    const sys = 118 + Math.round(Math.random() * 8)
    const dia = 78 + Math.round(Math.random() * 6)
    bpEl!.textContent = `${sys}/${dia}`
    respEl!.textContent = String(15 + jitter())
  }
}

// ---- Mouse Proximity → BPM ----
function getProximityBPM(): number {
  if (mouseX < 0) return 72
  const hero = document.getElementById('hero')!
  const rect = hero.getBoundingClientRect()
  const cx = rect.left + rect.width / 2
  const cy = rect.top + rect.height / 2
  const dist = Math.sqrt((mouseX - cx) ** 2 + (mouseY - cy) ** 2)
  const maxDist = Math.sqrt(rect.width ** 2 + rect.height ** 2) / 2
  const proximity = 1 - Math.min(1, dist / maxDist)
  return 72 + proximity * 68 // 72–140 bpm
}

// ---- Typewriter for Bio ----
function updateBioTypewriter(ts: number): void {
  if (!bootDone) return
  if (!typewriterStart) typewriterStart = ts
  const elapsed = ts - typewriterStart
  const chars = Math.min(BIO_TEXT.length, Math.floor((elapsed / 1000) * 120))
  const bioEl = document.getElementById('bio-text')!
  const cursorEl = document.getElementById('bio-cursor')!
  bioEl.textContent = BIO_TEXT.substring(0, chars)
  cursorEl.style.display = chars < BIO_TEXT.length ? 'inline-block' : 'none'
}

// ---- Hero Name Typewriter ----
let nameRevealed = false
function updateNameTypewriter(ts: number): void {
  if (!bootDone) return
  if (!typewriterStart) typewriterStart = ts
  const elapsed = ts - typewriterStart
  const chars = Math.min(HEADLINE_TEXT.length, Math.floor((elapsed / 1000) * 60))
  const titleEl = document.getElementById('hero-title')!
  titleEl.textContent = HEADLINE_TEXT.substring(0, chars)

  if (chars >= HEADLINE_TEXT.length && !nameRevealed) {
    nameRevealed = true
    document.getElementById('hero-subtitle')!.textContent = SUBTITLE_TEXT
    document.getElementById('hero-subtitle')!.classList.add('visible')
  }
}

// ---- Shock Effect ----
function triggerShock(x: number, y: number): void {
  const flash = document.getElementById('shock')!
  flash.classList.remove('active')
  void flash.offsetWidth // force reflow to restart animation
  flash.style.setProperty('--sx', `${x}px`)
  flash.style.setProperty('--sy', `${y}px`)
  flash.classList.add('active')
  shock(ecg)
  flash.addEventListener('animationend', () => flash.classList.remove('active'), { once: true })
}

// ---- Animation Loop ----
function loop(ts: number): void {
  const dt = lastTs ? (ts - lastTs) / 1000 : 0
  lastTs = ts

  // Mouse proximity BPM
  const targetBpm = getProximityBPM()
  setBPM(ecg, targetBpm)
  setBPM(stripEcg, targetBpm)
  updateVitals(ecg.bpm)

  // Draw hero ECG
  drawECG(ecg, dt, ACCENT, ACCENT_WARN)

  // Draw sticky strip ECG
  drawECG(stripEcg, dt, ACCENT, ACCENT_WARN)

  // DNA helix
  tickHelix(helix, ts)

  // Name + bio typewriter
  updateNameTypewriter(ts)
  updateBioTypewriter(ts)

  // Mini signals on project cards (cached NodeList)
  const tSec = ts / 1000
  for (const canvas of signalCanvases) {
    const id = canvas.dataset.signal
    if (id) drawMiniSignal(canvas, id, tSec, ACCENT)
  }

  requestAnimationFrame(loop)
}

// ---- Events ----
function setupEvents(): void {
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  window.addEventListener('blur', () => {
    mouseX = -1
    mouseY = -1
  })

  document.getElementById('hero-canvas')!.addEventListener('click', (e) => {
    triggerShock(e.clientX, e.clientY)
  })

  window.addEventListener('scroll', () => {
    setHelixScroll(helix, window.scrollY)
    // Hide scroll indicator after scrolling
    const indicator = document.getElementById('scroll-indicator')
    if (indicator && window.scrollY > 50) {
      indicator.style.opacity = '0'
      indicator.style.transition = 'opacity 0.3s ease'
    }
  })
}

// ---- Boot ----
async function boot(): Promise<void> {
  buildVitals()
  buildLinks()
  buildProjectCards()

  // Cache signal canvases and init interactive event listeners
  signalCanvases = Array.from(document.querySelectorAll<HTMLCanvasElement>('.card-signal'))
  for (const canvas of signalCanvases) initSimEvents(canvas)

  // Create ECG instances
  ecg = createECG(document.getElementById('hero-canvas') as HTMLCanvasElement, 42)
  stripEcg = createECG(document.getElementById('strip-canvas') as HTMLCanvasElement, 42)

  // Create DNA helix
  helix = createHelix(document.getElementById('dna-canvas') as HTMLCanvasElement)

  setupEvents()

  // Wait for fonts, then boot
  await document.fonts.ready
  await runBootSequence()

  typewriterStart = performance.now()
  requestAnimationFrame(loop)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => boot())
} else {
  boot()
}
