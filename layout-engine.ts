import {
  prepareWithSegments,
  layoutNextLine,
  walkLineRanges,
  layout,
  prepare,
  type PreparedText,
  type PreparedTextWithSegments,
  type LayoutCursor,
} from '@chenglou/pretext'
import { carveTextLineSlots, getPolygonIntervalForBand, type Interval, type Point, type Rect } from './wrap-geometry.ts'

export type PositionedLine = {
  x: number
  y: number
  width: number
  text: string
}

export type PositionedCard = {
  index: number
  x: number
  y: number
  width: number
  height: number
}

// Cache prepared texts
const preparedCache = new Map<string, PreparedTextWithSegments>()
const preparedSimpleCache = new Map<string, PreparedText>()

function getPrepared(text: string, font: string): PreparedTextWithSegments {
  const key = `${font}::${text}`
  const cached = preparedCache.get(key)
  if (cached) return cached
  const prepared = prepareWithSegments(text, font)
  preparedCache.set(key, prepared)
  return prepared
}

function getPreparedSimple(text: string, font: string): PreparedText {
  const key = `${font}::${text}`
  const cached = preparedSimpleCache.get(key)
  if (cached) return cached
  const prepared = prepare(text, font)
  preparedSimpleCache.set(key, prepared)
  return prepared
}

// Check if text breaks inside a word at a given width
function breaksInsideWord(prepared: PreparedTextWithSegments, maxWidth: number): boolean {
  let breaks = false
  walkLineRanges(prepared, maxWidth, line => {
    if (line.end.graphemeIndex !== 0) breaks = true
  })
  return breaks
}

// Binary search for the largest font size that fits without word breaks
export function fitHeadline(
  text: string,
  fontFamily: string,
  maxWidth: number,
  minSize: number,
  maxSize: number,
): { font: string; size: number; lines: PositionedLine[]; lineHeight: number } {
  let low = minSize
  let high = maxSize
  let bestSize = low

  while (low <= high) {
    const size = Math.floor((low + high) / 2)
    const font = `700 ${size}px ${fontFamily}`
    const prepared = getPrepared(text, font)
    if (!breaksInsideWord(prepared, maxWidth)) {
      bestSize = size
      low = size + 1
    } else {
      high = size - 1
    }
  }

  const finalFont = `700 ${bestSize}px ${fontFamily}`
  const lineHeight = Math.round(bestSize * 0.95)
  const prepared = getPrepared(text, finalFont)
  const lines: PositionedLine[] = []
  let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 }
  let y = 0

  while (true) {
    const line = layoutNextLine(prepared, cursor, maxWidth)
    if (!line) break
    lines.push({ x: 0, y, width: line.width, text: line.text })
    cursor = line.end
    y += lineHeight
  }

  return { font: finalFont, size: bestSize, lines, lineHeight }
}

// Lay out text in a column region, avoiding obstacles
export function layoutColumn(
  text: string,
  font: string,
  startCursor: LayoutCursor,
  region: Rect,
  lineHeight: number,
  obstacles: Point[][],
  obstaclePadH: number,
  obstaclePadV: number,
): { lines: PositionedLine[]; cursor: LayoutCursor } {
  const prepared = getPrepared(text, font)
  let cursor = startCursor
  let lineTop = region.y
  const lines: PositionedLine[] = []

  while (lineTop + lineHeight <= region.y + region.height) {
    const bandTop = lineTop
    const bandBottom = lineTop + lineHeight

    // Compute blocked intervals from all obstacles
    const blocked: Interval[] = []
    for (const hull of obstacles) {
      const interval = getPolygonIntervalForBand(hull, bandTop, bandBottom, obstaclePadH, obstaclePadV)
      if (interval) blocked.push(interval)
    }

    // Carve available text slots
    const slots = carveTextLineSlots(
      { left: region.x, right: region.x + region.width },
      blocked,
    )

    if (slots.length === 0) {
      lineTop += lineHeight
      continue
    }

    // Pick the widest slot
    let bestSlot = slots[0]!
    for (let i = 1; i < slots.length; i++) {
      if (slots[i]!.right - slots[i]!.left > bestSlot.right - bestSlot.left) {
        bestSlot = slots[i]!
      }
    }

    const slotWidth = bestSlot.right - bestSlot.left
    const line = layoutNextLine(prepared, cursor, slotWidth)
    if (!line) break

    lines.push({
      x: Math.round(bestSlot.left),
      y: Math.round(lineTop),
      width: line.width,
      text: line.text,
    })

    cursor = line.end
    lineTop += lineHeight
  }

  return { lines, cursor }
}

// Masonry layout using Pretext height prediction
export function layoutMasonry(
  texts: string[],
  font: string,
  lineHeight: number,
  containerWidth: number,
  colCount: number,
  colGap: number,
  cardPaddingX: number,
  cardPaddingY: number,
  titleHeight: number,
): { cards: PositionedCard[]; contentHeight: number; colWidth: number } {
  const colWidth = (containerWidth - (colCount - 1) * colGap) / colCount
  const textWidth = colWidth - cardPaddingX * 2

  const colHeights = new Float64Array(colCount)
  const cards: PositionedCard[] = []

  for (let i = 0; i < texts.length; i++) {
    // Find shortest column
    let shortest = 0
    for (let c = 1; c < colCount; c++) {
      if (colHeights[c]! < colHeights[shortest]!) shortest = c
    }

    const prepared = getPreparedSimple(texts[i]!, font)
    const { height } = layout(prepared, textWidth, lineHeight)
    const totalH = height + cardPaddingY * 2 + titleHeight

    cards.push({
      index: i,
      x: shortest * (colWidth + colGap),
      y: colHeights[shortest]!,
      width: colWidth,
      height: totalH,
    })

    colHeights[shortest]! += totalH + colGap
  }

  let contentHeight = 0
  for (let c = 0; c < colCount; c++) {
    if (colHeights[c]! > contentHeight) contentHeight = colHeights[c]!
  }

  return { cards, contentHeight: contentHeight - colGap, colWidth }
}
