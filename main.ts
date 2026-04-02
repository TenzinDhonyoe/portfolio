import { layout, prepare, type PreparedText } from '@chenglou/pretext'

// ---- Data ----

type Project = {
  id: string
  title: string
  tag: string
  text: string
}

const projects: Project[] = [
  {
    id: 'gluco',
    title: 'GlucoSolutions',
    tag: 'Startup',
    text: 'Personalized pre-diabetes management platform. Includes a patient-facing app for tracking glucose and metabolic health, plus a dietitian dashboard for monitoring client stability. Built with TypeScript across the full stack.',
  },
  {
    id: 'tumor',
    title: 'Tumor Detection Prototype',
    tag: 'ML / Healthcare',
    text: 'Proof-of-concept system for identifying tumor-like structures through image analysis pipelines. Combines preprocessing, segmentation, and classification to flag regions of interest in biomedical imagery.',
  },
  {
    id: 'trading',
    title: 'ML Trading Bot',
    tag: 'ML / Finance',
    text: 'Automated trading system for SPY ETF using sentiment analysis of financial news articles. Combines NLP-driven signal generation with the Alpaca API for trade execution. Built in Python.',
  },
  {
    id: 'gym',
    title: 'ML Gym App',
    tag: 'Computer Vision',
    text: 'Computer vision application that uses pose estimation to track gym exercises and count repetitions in real time. Analyzes body joint positions frame-by-frame to detect movement patterns.',
  },
  {
    id: 'afib',
    title: 'Atrial Fibrillation Detection',
    tag: 'Signal Processing',
    text: 'SVM-based classifier for detecting atrial fibrillation from ECG signal data. Handles signal preprocessing, feature extraction, and classification for cardiac arrhythmia detection.',
  },
  {
    id: 'gene',
    title: 'Gene Sequence Analysis',
    tag: 'Bioinformatics',
    text: 'DNA analysis toolkit for pattern matching, gene finding, and promoter region detection. Parses FASTA files, compares sequences, and identifies biologically relevant motifs in genomic data.',
  },
]

// ---- State ----

type State = {
  openId: string | null
}

const state: State = { openId: null }

// ---- Pretext cache ----

const preparedCache = {
  font: '',
  items: [] as PreparedText[],
}

function refreshPrepared(font: string): void {
  if (preparedCache.font === font) return
  preparedCache.font = font
  preparedCache.items = projects.map(p => prepare(p.text, font))
}

// ---- DOM ----

type ItemDom = {
  root: HTMLElement
  toggle: HTMLButtonElement
  glyph: HTMLSpanElement
  body: HTMLDivElement
  inner: HTMLDivElement
  copy: HTMLParagraphElement
}

let itemDoms: ItemDom[] = []
let container: HTMLElement | null = null
let raf: number | null = null

function buildDOM(): void {
  container = document.getElementById('projects')
  if (!container) return

  container.innerHTML = ''

  itemDoms = projects.map(project => {
    const root = document.createElement('article')
    root.className = 'accordion-item'

    root.innerHTML = `
      <button type="button" class="accordion-toggle" data-id="${project.id}" aria-expanded="false">
        <span class="accordion-title">${project.title}</span>
        <span class="accordion-tag">${project.tag}</span>
        <span class="accordion-glyph" aria-hidden="true"></span>
      </button>
      <div class="accordion-body">
        <div class="accordion-inner">
          <p class="accordion-copy">${project.text}</p>
        </div>
      </div>
    `

    container!.appendChild(root)

    return {
      root,
      toggle: root.querySelector('.accordion-toggle') as HTMLButtonElement,
      glyph: root.querySelector('.accordion-glyph') as HTMLSpanElement,
      body: root.querySelector('.accordion-body') as HTMLDivElement,
      inner: root.querySelector('.accordion-inner') as HTMLDivElement,
      copy: root.querySelector('.accordion-copy') as HTMLParagraphElement,
    }
  })
}

// ---- Helpers ----

function parsePx(v: string): number {
  const n = parseFloat(v)
  return Number.isFinite(n) ? n : 0
}

function getFontString(s: CSSStyleDeclaration): string {
  return s.font.length > 0
    ? s.font
    : `${s.fontStyle} ${s.fontVariant} ${s.fontWeight} ${s.fontSize} / ${s.lineHeight} ${s.fontFamily}`
}

// ---- Render ----

function render(): void {
  raf = null
  if (itemDoms.length === 0) return

  const refCopy = itemDoms[0]!.copy
  const refInner = itemDoms[0]!.inner
  const copyStyles = getComputedStyle(refCopy)
  const innerStyles = getComputedStyle(refInner)
  const font = getFontString(copyStyles)
  const lineHeight = parsePx(copyStyles.lineHeight)
  const contentWidth = refCopy.getBoundingClientRect().width
  const paddingY = parsePx(innerStyles.paddingTop) + parsePx(innerStyles.paddingBottom)

  refreshPrepared(font)

  for (let i = 0; i < projects.length; i++) {
    const open = state.openId === projects[i]!.id
    const dom = itemDoms[i]!

    if (open) {
      const metrics = layout(preparedCache.items[i]!, contentWidth, lineHeight)
      dom.body.style.height = `${Math.ceil(metrics.height + paddingY)}px`
    } else {
      dom.body.style.height = '0px'
    }

    dom.glyph.style.transform = open ? 'rotate(90deg)' : 'rotate(0deg)'
    dom.toggle.setAttribute('aria-expanded', open ? 'true' : 'false')
  }
}

function scheduleRender(): void {
  if (raf !== null) return
  raf = requestAnimationFrame(() => render())
}

// ---- Events ----

function onToggleClick(e: Event): void {
  const target = e.target
  if (!(target instanceof Element)) return
  const toggle = target.closest<HTMLButtonElement>('.accordion-toggle')
  if (!toggle) return

  const id = toggle.dataset['id']
  if (!id) return

  state.openId = state.openId === id ? null : id
  scheduleRender()
}

// ---- Boot ----

function boot(): void {
  buildDOM()
  if (!container) return

  container.addEventListener('click', onToggleClick)
  window.addEventListener('resize', scheduleRender)
  document.fonts.ready.then(scheduleRender)
  scheduleRender()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true })
} else {
  boot()
}
