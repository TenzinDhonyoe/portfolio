import { fitHeadline, layoutColumn, layoutMasonry } from './layout-engine.ts'
import { createWaveform, updateWaveformRect, drawWaveform, randomizeWaveform, isPointInWaveformArea, type WaveformState } from './ecg-waveform.ts'
import { HEADLINE_TEXT, SUBTITLE_TEXT, BIO_TEXT, PROJECTS, LINKS } from './data.ts'

// ---- Constants ----
const HEADLINE_FONT = '"Newsreader", Georgia, serif'
const BODY_FONT_STR = '17px "Inter", -apple-system, BlinkMacSystemFont, sans-serif'
const BODY_LINE_HEIGHT = 28
const SUBTITLE_FONT = '15px "Inter", -apple-system, BlinkMacSystemFont, sans-serif'
const CARD_FONT = '15px "Inter", -apple-system, BlinkMacSystemFont, sans-serif'
const CARD_LINE_HEIGHT = 23
const CARD_TITLE_HEIGHT = 52 // title + tag + gap
const CARD_PAD_X = 20
const CARD_PAD_Y = 16
const CARD_GAP = 14
const NARROW = 850
const MOBILE = 500

// ---- State ----
let waveform: WaveformState
let hasInteracted = false
let raf: number | null = null

// ---- DOM Cache ----
type DomCache = {
  stage: HTMLDivElement
  headlineLines: HTMLSpanElement[]
  subtitle: HTMLSpanElement
  bodyLines: HTMLSpanElement[]
  linksNav: HTMLElement
  projectsLabel: HTMLSpanElement
  projectsContainer: HTMLDivElement
  projectCards: HTMLDivElement[]
  footer: HTMLElement
  hint: HTMLSpanElement
}

const dom: DomCache = {
  stage: document.getElementById('stage') as HTMLDivElement,
  headlineLines: [],
  subtitle: document.createElement('span'),
  bodyLines: [],
  linksNav: document.createElement('nav'),
  projectsLabel: document.createElement('span'),
  projectsContainer: document.createElement('div'),
  projectCards: [],
  footer: document.createElement('footer'),
  hint: document.createElement('span'),
}

// ---- Sync span pool (from Pretext dynamic-layout pattern) ----
function syncPool(pool: HTMLSpanElement[], count: number, parent: HTMLElement, className: string): void {
  while (pool.length < count) {
    const el = document.createElement('span')
    el.className = className
    pool.push(el)
    parent.appendChild(el)
  }
  while (pool.length > count) {
    pool.pop()!.remove()
  }
}

// ---- Build static DOM ----
function buildStaticDOM(): void {
  const stage = dom.stage

  // Subtitle
  dom.subtitle.className = 'subtitle'
  dom.subtitle.textContent = SUBTITLE_TEXT
  stage.appendChild(dom.subtitle)

  // Links nav
  dom.linksNav.className = 'links-nav'
  dom.linksNav.innerHTML = LINKS.map(link => {
    const icons: Record<string, string> = {
      github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
      linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
      globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
    }
    return `<a href="${link.url}" target="_blank" rel="noopener">${icons[link.icon] || ''}${link.label}</a>`
  }).join('')
  stage.appendChild(dom.linksNav)

  // ECG waveform
  waveform = createWaveform(42)
  stage.appendChild(waveform.canvas)

  // Hint
  dom.hint.className = 'ecg-hint'
  dom.hint.textContent = 'click the heartbeat'
  stage.appendChild(dom.hint)

  // Projects label
  dom.projectsLabel.className = 'section-label'
  dom.projectsLabel.textContent = 'PROJECTS'

  // Projects container
  dom.projectsContainer.className = 'masonry-container'
  dom.projectsContainer.appendChild(dom.projectsLabel)

  // Project cards
  dom.projectCards = PROJECTS.map(project => {
    const card = document.createElement('div')
    card.className = 'project-card'
    card.innerHTML = `
      <a href="${project.url}" target="_blank" rel="noopener" class="card-link">
        <span class="card-title">${project.title}</span>
        <span class="card-tag">${project.tag}</span>
        <p class="card-text">${project.text}</p>
      </a>
    `
    dom.projectsContainer.appendChild(card)
    return card
  })

  stage.appendChild(dom.projectsContainer)

  // Footer
  dom.footer.className = 'footer'
  dom.footer.textContent = 'Tenzin Dhonyoe \u00B7 Toronto, Canada'
  stage.appendChild(dom.footer)
}

// ---- Layout & Render ----
function render(): void {
  raf = null
  const stage = dom.stage
  const pageWidth = stage.clientWidth
  const isNarrow = pageWidth < NARROW
  const isMobile = pageWidth < MOBILE
  const gutter = isMobile ? 20 : isNarrow ? 32 : Math.max(40, pageWidth * 0.06)
  const contentWidth = pageWidth - gutter * 2

  // 1. Fit headline
  const headlineMaxSize = isMobile ? 60 : isNarrow ? 80 : Math.min(120, pageWidth * 0.1)
  const headlineMinSize = isMobile ? 28 : 36
  const headline = fitHeadline(HEADLINE_TEXT, HEADLINE_FONT, contentWidth, headlineMinSize, headlineMaxSize)

  // Project headline lines
  syncPool(dom.headlineLines, headline.lines.length, stage, 'headline-line')
  for (let i = 0; i < headline.lines.length; i++) {
    const line = headline.lines[i]!
    const el = dom.headlineLines[i]!
    el.textContent = line.text
    el.style.left = `${gutter + line.x}px`
    el.style.top = `${40 + line.y}px`
    el.style.font = headline.font
    el.style.lineHeight = `${headline.lineHeight}px`
  }

  const headlineBottom = 40 + headline.lines.length * headline.lineHeight

  // 2. Subtitle
  dom.subtitle.style.left = `${gutter}px`
  dom.subtitle.style.top = `${headlineBottom + 12}px`
  dom.subtitle.style.font = SUBTITLE_FONT

  const subtitleBottom = headlineBottom + 12 + 22

  // 3. Links
  dom.linksNav.style.left = `${gutter}px`
  dom.linksNav.style.top = `${subtitleBottom + 20}px`
  const linksBottom = subtitleBottom + 20 + 28

  // 4. Body text + ECG waveform
  const bodyTop = linksBottom + 32

  if (isNarrow) {
    // Single column: ECG above, text below
    const ecgW = Math.min(contentWidth, 320)
    const ecgH = Math.round(ecgW * 0.35)
    const ecgX = gutter + (contentWidth - ecgW) / 2
    const ecgY = bodyTop

    updateWaveformRect(waveform, { x: ecgX, y: ecgY, width: ecgW, height: ecgH }, 10)
    drawWaveform(waveform, getAccentColor())

    dom.hint.style.left = `${ecgX}px`
    dom.hint.style.top = `${ecgY + ecgH + 6}px`
    dom.hint.style.width = `${ecgW}px`

    const textTop = ecgY + ecgH + 28
    const bodyRegion = { x: gutter, y: textTop, width: contentWidth, height: 800 }
    const { lines } = layoutColumn(BIO_TEXT, BODY_FONT_STR, { segmentIndex: 0, graphemeIndex: 0 }, bodyRegion, BODY_LINE_HEIGHT, [], 0, 0)

    syncPool(dom.bodyLines, lines.length, stage, 'body-line')
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]!
      const el = dom.bodyLines[i]!
      el.textContent = line.text
      el.style.left = `${line.x}px`
      el.style.top = `${line.y}px`
      el.style.font = BODY_FONT_STR
      el.style.lineHeight = `${BODY_LINE_HEIGHT}px`
    }

    const bodyBottom = lines.length > 0 ? lines[lines.length - 1]!.y + BODY_LINE_HEIGHT : textTop
    layoutProjects(gutter, bodyBottom + 48, contentWidth, isMobile ? 1 : 2)
  } else {
    // Two-column editorial layout
    const columnGap = Math.round(contentWidth * 0.04)
    const leftWidth = Math.round((contentWidth - columnGap) * 0.48)
    const rightWidth = contentWidth - columnGap - leftWidth
    const rightX = gutter + leftWidth + columnGap

    // ECG in right column
    const ecgW = Math.min(rightWidth * 0.75, 260)
    const ecgH = Math.round(ecgW * 0.45)
    const ecgX = rightX + (rightWidth - ecgW) / 2
    const ecgY = bodyTop + BODY_LINE_HEIGHT * 2

    updateWaveformRect(waveform, { x: ecgX, y: ecgY, width: ecgW, height: ecgH }, 12)
    drawWaveform(waveform, getAccentColor())

    dom.hint.style.left = `${ecgX}px`
    dom.hint.style.top = `${ecgY + ecgH + 4}px`
    dom.hint.style.width = `${ecgW}px`

    // Left column: limited height so text flows into right column
    const leftMaxLines = 6
    const leftHeight = leftMaxLines * BODY_LINE_HEIGHT
    const leftRegion = { x: gutter, y: bodyTop, width: leftWidth, height: leftHeight }
    const leftResult = layoutColumn(
      BIO_TEXT, BODY_FONT_STR,
      { segmentIndex: 0, graphemeIndex: 0 },
      leftRegion, BODY_LINE_HEIGHT,
      [], 0, 0,
    )

    // Right column: text wraps around ECG, continues from left cursor
    const rightHeight = Math.max(ecgY + ecgH + BODY_LINE_HEIGHT * 4 - bodyTop, leftHeight + BODY_LINE_HEIGHT * 4)
    const rightRegion = { x: rightX, y: bodyTop, width: rightWidth, height: rightHeight }
    const rightResult = layoutColumn(
      BIO_TEXT, BODY_FONT_STR,
      leftResult.cursor,
      rightRegion, BODY_LINE_HEIGHT,
      [waveform.hullPoints],
      Math.round(BODY_LINE_HEIGHT * 0.6),
      Math.round(BODY_LINE_HEIGHT * 0.2),
    )

    const allLines = [...leftResult.lines, ...rightResult.lines]
    syncPool(dom.bodyLines, allLines.length, stage, 'body-line')
    for (let i = 0; i < allLines.length; i++) {
      const line = allLines[i]!
      const el = dom.bodyLines[i]!
      el.textContent = line.text
      el.style.left = `${line.x}px`
      el.style.top = `${line.y}px`
      el.style.font = BODY_FONT_STR
      el.style.lineHeight = `${BODY_LINE_HEIGHT}px`
    }

    const bodyBottom = allLines.length > 0
      ? Math.max(...allLines.map(l => l.y)) + BODY_LINE_HEIGHT
      : bodyTop + 200

    layoutProjects(gutter, bodyBottom + 56, contentWidth, 3)
  }
}

function layoutProjects(left: number, top: number, width: number, colCount: number): void {
  // Position section label
  dom.projectsLabel.style.left = `${left}px`
  dom.projectsLabel.style.top = `${top}px`
  dom.projectsLabel.style.position = 'absolute'

  const gridTop = top + 32

  // Compute masonry layout
  const texts = PROJECTS.map(p => p.text)
  const { cards, contentHeight, colWidth } = layoutMasonry(
    texts, CARD_FONT, CARD_LINE_HEIGHT,
    width, colCount, CARD_GAP,
    CARD_PAD_X, CARD_PAD_Y, CARD_TITLE_HEIGHT,
  )

  // Position container
  dom.projectsContainer.style.left = `${left}px`
  dom.projectsContainer.style.top = `${gridTop}px`
  dom.projectsContainer.style.width = `${width}px`
  dom.projectsContainer.style.height = `${contentHeight}px`

  // Position each card
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i]!
    const el = dom.projectCards[card.index]!
    el.style.left = `${card.x}px`
    el.style.top = `${card.y}px`
    el.style.width = `${card.width}px`
    el.style.height = `${card.height}px`
  }

  // Footer
  const footerTop = gridTop + contentHeight + 48
  dom.footer.style.top = `${footerTop}px`
  dom.footer.style.left = `${left}px`
  dom.footer.style.width = `${width}px`

  // Stage height
  dom.stage.style.height = `${footerTop + 60}px`
}

function getAccentColor(): string {
  return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#c44d2b'
}

function scheduleRender(): void {
  if (raf !== null) return
  raf = requestAnimationFrame(() => render())
}

// ---- Events ----
function handleClick(e: MouseEvent): void {
  const stageRect = dom.stage.getBoundingClientRect()
  const x = e.clientX - stageRect.left
  const y = e.clientY - stageRect.top + window.scrollY
  if (isPointInWaveformArea(waveform, x, y)) {
    randomizeWaveform(waveform)
    if (!hasInteracted) {
      hasInteracted = true
      dom.hint.classList.add('faded')
    }
    scheduleRender()
  }
}

// ---- Boot ----
function boot(): void {
  buildStaticDOM()

  dom.stage.addEventListener('click', handleClick)
  window.addEventListener('resize', scheduleRender)

  // Match dark mode changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', scheduleRender)

  document.fonts.ready.then(scheduleRender)
  scheduleRender()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true })
} else {
  boot()
}
