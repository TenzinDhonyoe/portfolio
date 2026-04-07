// Interactive technology simulations for each project card

type SimState = {
  mouseX: number
  mouseY: number
  mouseDown: boolean
  clicked: boolean
  clickX: number
  clickY: number
  custom: Record<string, number>
}

type SimRenderer = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number, s: SimState) => void

// ---- GlucoSolutions: Beer-Lambert Law Simulation ----
// Draggable sliders for concentration (c) and path length (l).
// Light beam dims in real time. Absorption spectrum updates live.
const beerLambert: SimRenderer = (ctx, w, h, t, s) => {
  // Init slider values
  if (s.custom.c === undefined) { s.custom.c = 0.35; s.custom.l = 0.5; s.custom.drag = 0 }

  // -- Slider geometry --
  const sliderY1 = h - 28  // concentration slider
  const sliderY2 = h - 12  // path length slider
  const sliderX0 = 8
  const sliderW = w * 0.42
  const handleR = 5

  // -- Drag logic --
  if (s.mouseDown && s.mouseX >= 0) {
    const inSliderX = s.mouseX >= sliderX0 && s.mouseX <= sliderX0 + sliderW

    // Start drag: check which slider handle is near
    if (s.custom.drag === 0) {
      const cx1 = sliderX0 + s.custom.c * sliderW
      const cx2 = sliderX0 + s.custom.l * sliderW
      if (inSliderX && Math.abs(s.mouseY - sliderY1) < 12) s.custom.drag = 1
      else if (inSliderX && Math.abs(s.mouseY - sliderY2) < 12) s.custom.drag = 2
    }

    // Update value while dragging
    if (s.custom.drag === 1) {
      s.custom.c = Math.max(0, Math.min(1, (s.mouseX - sliderX0) / sliderW))
    } else if (s.custom.drag === 2) {
      s.custom.l = Math.max(0.05, Math.min(1, (s.mouseX - sliderX0) / sliderW))
    }
  } else {
    s.custom.drag = 0
  }

  const concentration = s.custom.c
  const pathLength = s.custom.l
  const epsilon = 2.5
  const absorbance = epsilon * pathLength * concentration
  const transmittance = Math.pow(10, -absorbance)

  // -- Draw optical setup (top portion) --
  const beamY = h * 0.3
  const cuvetteX0 = w * 0.18
  const cuvetteW = pathLength * w * 0.25 + w * 0.05 // width scales with path length
  const cuvetteX1 = cuvetteX0 + cuvetteW
  const cuvetteH = h * 0.32
  const cuvetteY0 = beamY - cuvetteH / 2
  const detX = cuvetteX1 + w * 0.06

  // Light source glow
  const grad = ctx.createRadialGradient(10, beamY, 1, 10, beamY, 14)
  grad.addColorStop(0, 'rgba(0, 230, 118, 0.9)')
  grad.addColorStop(1, 'rgba(0, 230, 118, 0)')
  ctx.fillStyle = grad
  ctx.beginPath(); ctx.arc(10, beamY, 14, 0, Math.PI * 2); ctx.fill()

  // Incident beam (I₀)
  ctx.strokeStyle = 'rgba(0, 230, 118, 0.7)'
  ctx.lineWidth = 3
  ctx.beginPath(); ctx.moveTo(16, beamY); ctx.lineTo(cuvetteX0, beamY); ctx.stroke()

  // Labels
  ctx.fillStyle = '#00e676'
  ctx.font = '7px JetBrains Mono'
  ctx.fillText('I\u2080', cuvetteX0 - 12, beamY - 8)

  // Cuvette
  ctx.strokeStyle = 'rgba(0, 230, 118, 0.3)'
  ctx.lineWidth = 1.5
  ctx.strokeRect(cuvetteX0, cuvetteY0, cuvetteW, cuvetteH)

  // Solution fill (opacity = concentration)
  ctx.fillStyle = `rgba(0, 230, 118, ${0.03 + concentration * 0.15})`
  ctx.fillRect(cuvetteX0 + 1, cuvetteY0 + 1, cuvetteW - 2, cuvetteH - 2)

  // Glucose molecules
  const molCount = Math.floor(concentration * 35)
  let seed = 42
  const rng = () => { seed = (seed * 1664525 + 1013904223) & 0xffffffff; return (seed >>> 0) / 4294967296 }
  ctx.fillStyle = `rgba(0, 230, 118, ${0.15 + concentration * 0.25})`
  for (let i = 0; i < molCount; i++) {
    const mx = cuvetteX0 + 4 + rng() * (cuvetteW - 8)
    const my = cuvetteY0 + 4 + rng() * (cuvetteH - 8)
    ctx.beginPath(); ctx.arc(mx, my, 1.5 + rng() * 1.5, 0, Math.PI * 2); ctx.fill()
  }

  // Path length bracket
  ctx.strokeStyle = 'rgba(200,208,216,0.3)'
  ctx.lineWidth = 0.5
  const brkY = cuvetteY0 + cuvetteH + 4
  ctx.beginPath(); ctx.moveTo(cuvetteX0, brkY); ctx.lineTo(cuvetteX0, brkY + 4); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(cuvetteX1, brkY); ctx.lineTo(cuvetteX1, brkY + 4); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(cuvetteX0, brkY + 2); ctx.lineTo(cuvetteX1, brkY + 2); ctx.stroke()
  ctx.fillStyle = 'rgba(200,208,216,0.4)'
  ctx.font = '7px JetBrains Mono'
  ctx.fillText('l', cuvetteX0 + cuvetteW / 2 - 2, brkY + 11)

  // Transmitted beam (dims with absorbance)
  ctx.strokeStyle = `rgba(0, 230, 118, ${Math.max(0.05, transmittance * 0.7)})`
  ctx.lineWidth = Math.max(0.5, 3 * transmittance)
  ctx.beginPath(); ctx.moveTo(cuvetteX1, beamY); ctx.lineTo(detX, beamY); ctx.stroke()

  // Transmitted label
  ctx.fillStyle = `rgba(0, 230, 118, ${0.3 + transmittance * 0.5})`
  ctx.font = '7px JetBrains Mono'
  ctx.fillText('I', detX - 10, beamY - 8)

  // Detector
  ctx.fillStyle = `rgba(0, 230, 118, ${0.08 + transmittance * 0.35})`
  ctx.fillRect(detX, beamY - 8, 8, 16)
  ctx.strokeStyle = 'rgba(0, 230, 118, 0.3)'
  ctx.lineWidth = 1
  ctx.strokeRect(detX, beamY - 8, 8, 16)

  // -- Absorption spectrum (right side) --
  const specX = w * 0.56
  const specW = w * 0.4
  const specY = 6
  const specH = h * 0.42

  // Axes
  ctx.strokeStyle = 'rgba(0, 230, 118, 0.2)'
  ctx.lineWidth = 0.5
  ctx.beginPath()
  ctx.moveTo(specX, specY); ctx.lineTo(specX, specY + specH)
  ctx.lineTo(specX + specW, specY + specH)
  ctx.stroke()

  ctx.fillStyle = 'rgba(200,208,216,0.3)'
  ctx.font = '7px JetBrains Mono'
  ctx.fillText('Absorbance', specX + 2, specY + 8)
  ctx.fillText('\u03BB (nm)', specX + specW - 28, specY + specH + 10)
  // Wavelength labels
  ctx.fillText('800', specX - 2, specY + specH + 10)
  ctx.fillText('2500', specX + specW - 16, specY + specH + 10)

  // Draw spectrum curve (NIR glucose absorption peaks at ~1000nm, ~1500nm, ~2100nm)
  ctx.strokeStyle = '#00e676'
  ctx.lineWidth = 1.5
  ctx.beginPath()
  for (let px = 0; px < specW; px++) {
    const lambda = 800 + (px / specW) * 1700 // 800-2500nm
    // Glucose NIR absorption peaks (simplified)
    let a = 0.02
    a += 0.3 * Math.exp(-((lambda - 1000) ** 2) / 8000) // O-H stretch
    a += 0.6 * Math.exp(-((lambda - 1550) ** 2) / 12000) // C-H combination
    a += 0.9 * Math.exp(-((lambda - 2100) ** 2) / 15000) // C-H stretch
    a *= concentration * pathLength * 2 // scale by Beer-Lambert params
    const y = specY + specH - Math.min(a, 1) * specH * 0.9
    px === 0 ? ctx.moveTo(specX + px, y) : ctx.lineTo(specX + px, y)
  }
  ctx.stroke()

  // Glow pass on spectrum
  ctx.globalAlpha = 0.15
  ctx.lineWidth = 4
  ctx.stroke()
  ctx.globalAlpha = 1
  ctx.lineWidth = 1

  // -- Readouts (stacked vertically below spectrum) --
  const rdX = specX
  const rdY = specY + specH + 16
  ctx.fillStyle = '#00e676'
  ctx.font = '8px JetBrains Mono'
  ctx.fillText(`A = ${absorbance.toFixed(2)}  T = ${(transmittance * 100).toFixed(1)}%`, rdX, rdY)
  ctx.fillText(`c = ${(concentration * 200).toFixed(0)} mg/dL  l = ${(pathLength * 10).toFixed(1)} mm`, rdX, rdY + 11)
  ctx.fillStyle = 'rgba(200,208,216,0.4)'
  ctx.fillText('A = \u03B5\u00B7l\u00B7c', rdX, rdY + 22)

  // -- Draggable sliders (bottom) --
  const drawSlider = (label: string, val: number, y: number, active: boolean, unit: string, displayVal: string) => {
    // Track
    ctx.fillStyle = 'rgba(0, 230, 118, 0.1)'
    ctx.fillRect(sliderX0, y - 3, sliderW, 6)

    // Filled portion
    ctx.fillStyle = active ? 'rgba(0, 230, 118, 0.4)' : 'rgba(0, 230, 118, 0.2)'
    ctx.fillRect(sliderX0, y - 3, val * sliderW, 6)

    // Handle
    const hx = sliderX0 + val * sliderW
    ctx.fillStyle = active ? '#00e676' : 'rgba(0, 230, 118, 0.7)'
    ctx.beginPath(); ctx.arc(hx, y, active ? handleR + 1 : handleR, 0, Math.PI * 2); ctx.fill()

    // Label
    ctx.fillStyle = 'rgba(200,208,216,0.5)'
    ctx.font = '8px JetBrains Mono'
    ctx.fillText(`${label}: ${displayVal}${unit}`, sliderX0 + sliderW + 8, y + 3)
  }

  drawSlider('c', concentration, sliderY1, s.custom.drag === 1, ' mg/dL', (concentration * 200).toFixed(0))
  drawSlider('l', pathLength, sliderY2, s.custom.drag === 2, ' mm', (pathLength * 10).toFixed(1))
}

// ---- Tumor Detection: CNN Convolution Visualization ----
// Shows a kernel sliding over a pixel grid, computing feature map values.
const cnnConvolution: SimRenderer = (ctx, w, h, t, s) => {
  const gridSize = 7
  const cellSize = Math.min(Math.floor((h - 24) / gridSize), Math.floor((w * 0.35) / gridSize))
  const gridX = 8
  const gridY = 10

  // Generate "image" data (stable)
  let seed = 123
  const rng = () => { seed = (seed * 1664525 + 1013904223) & 0xffffffff; return (seed >>> 0) / 4294967296 }
  const pixels: number[][] = []
  for (let r = 0; r < gridSize; r++) {
    pixels[r] = []
    for (let c = 0; c < gridSize; c++) {
      // Create a blob pattern (tumor-like)
      const dx = c - 3.5, dy = r - 3
      const dist = Math.sqrt(dx * dx + dy * dy)
      pixels[r]![c] = dist < 2 ? 0.6 + rng() * 0.3 : rng() * 0.3
    }
  }

  // 3x3 kernel (edge detection)
  const kernel = [[-1, -1, -1], [-1, 8, -1], [-1, -1, -1]]

  // Kernel position from mouse or auto-sweep
  let kr: number, kc: number
  if (s.mouseX >= 0 && s.mouseX < gridX + gridSize * cellSize && s.mouseY < gridY + gridSize * cellSize) {
    kc = Math.floor((s.mouseX - gridX) / cellSize) - 1
    kr = Math.floor((s.mouseY - gridY) / cellSize) - 1
  } else {
    const pos = Math.floor(t * 3) % ((gridSize - 2) * (gridSize - 2))
    kr = Math.floor(pos / (gridSize - 2))
    kc = pos % (gridSize - 2)
  }
  kc = Math.max(0, Math.min(gridSize - 3, kc))
  kr = Math.max(0, Math.min(gridSize - 3, kr))

  // Draw input grid
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      const val = pixels[r]![c]!
      ctx.fillStyle = `rgba(0, 230, 118, ${val * 0.6})`
      ctx.fillRect(gridX + c * cellSize, gridY + r * cellSize, cellSize - 1, cellSize - 1)
    }
  }

  // Highlight kernel region
  ctx.strokeStyle = '#ff6d3a'
  ctx.lineWidth = 1.5
  ctx.strokeRect(gridX + kc * cellSize - 1, gridY + kr * cellSize - 1, cellSize * 3 + 1, cellSize * 3 + 1)

  // Compute convolution at kernel position
  let conv = 0
  for (let dr = 0; dr < 3; dr++) {
    for (let dc = 0; dc < 3; dc++) {
      conv += pixels[kr + dr]![kc + dc]! * kernel[dr]![dc]!
    }
  }
  const activated = Math.max(0, conv) // ReLU

  // Draw kernel (middle area)
  const kDrawX = w * 0.42
  const kDrawY = gridY + 4
  ctx.fillStyle = '#00e676'
  ctx.font = '8px JetBrains Mono'
  ctx.fillText('3x3 kernel', kDrawX, kDrawY - 1)
  for (let dr = 0; dr < 3; dr++) {
    for (let dc = 0; dc < 3; dc++) {
      const val = kernel[dr]![dc]!
      ctx.fillStyle = val > 0 ? 'rgba(0, 230, 118, 0.4)' : 'rgba(255, 109, 58, 0.25)'
      const kcS = Math.min(cellSize, 14)
      ctx.fillRect(kDrawX + dc * (kcS + 1), kDrawY + 4 + dr * (kcS + 1), kcS, kcS)
      ctx.fillStyle = '#c8d0d8'
      ctx.font = '7px JetBrains Mono'
      ctx.fillText(String(val), kDrawX + dc * (kcS + 1) + 2, kDrawY + 4 + dr * (kcS + 1) + kcS - 3)
    }
  }

  // Arrow
  ctx.strokeStyle = 'rgba(0,230,118,0.3)'
  ctx.lineWidth = 1
  const arrowX = kDrawX + 50
  ctx.beginPath(); ctx.moveTo(arrowX, h * 0.5); ctx.lineTo(arrowX + 16, h * 0.5); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(arrowX + 12, h * 0.5 - 3); ctx.lineTo(arrowX + 16, h * 0.5); ctx.lineTo(arrowX + 12, h * 0.5 + 3); ctx.fill()

  // Output feature map (right side)
  const fmX = w * 0.72
  const fmSize = gridSize - 2
  ctx.fillStyle = '#00e676'
  ctx.font = '8px JetBrains Mono'
  ctx.fillText('feature map', fmX, gridY - 1)
  for (let r = 0; r < fmSize; r++) {
    for (let c = 0; c < fmSize; c++) {
      let fv = 0
      for (let dr = 0; dr < 3; dr++)
        for (let dc = 0; dc < 3; dc++)
          fv += pixels[r + dr]![c + dc]! * kernel[dr]![dc]!
      fv = Math.max(0, fv) / 3 // normalized ReLU
      const highlight = r === kr && c === kc
      ctx.fillStyle = highlight
        ? `rgba(255, 109, 58, ${Math.min(1, fv + 0.3)})`
        : `rgba(0, 230, 118, ${fv * 0.6})`
      ctx.fillRect(fmX + c * cellSize, gridY + 4 + r * cellSize, cellSize - 1, cellSize - 1)
    }
  }

  // Readout
  ctx.fillStyle = '#ff6d3a'
  ctx.font = '8px JetBrains Mono'
  ctx.fillText(`conv=${conv.toFixed(1)} ReLU=${activated.toFixed(1)}`, fmX, h - 4)

  ctx.fillStyle = 'rgba(200,208,216,0.3)'
  ctx.font = '8px JetBrains Mono'
  ctx.fillText('hover kernel', 4, h - 4)
}

// ---- ML Trading Bot: News → Sentiment → Trade Execution ----
// Price chart with buy/sell signals driven by NLP sentiment of news headlines
const nlpSentiment: SimRenderer = (ctx, w, h, t, s) => {
  // Generate stable price data + signals
  if (!s.custom.priceInit) {
    s.custom.priceInit = 1
    let seed = 314
    const rng = () => { seed = (seed * 1664525 + 1013904223) & 0xffffffff; return (seed >>> 0) / 4294967296 }
    let price = 450 // SPY ~450
    const n = 120
    for (let i = 0; i < n; i++) {
      const trend = Math.sin(i * 0.05) * 0.3
      price += (rng() - 0.47 + trend) * 2.5
      price = Math.max(420, Math.min(480, price))
      s.custom['p' + i] = price
      // Sentiment signal: dips trigger buy, peaks trigger sell
      s.custom['sig' + i] = 0
      if (i > 5) {
        const avg3 = (s.custom['p' + (i - 3)]! + s.custom['p' + (i - 2)]! + s.custom['p' + (i - 1)]!) / 3
        if (price < avg3 - 3) s.custom['sig' + i] = 1 // buy (bearish news priced in)
        if (price > avg3 + 3) s.custom['sig' + i] = -1 // sell (bullish exhaustion)
      }
    }
    // Headlines mapped to time regions
    s.custom.totalPts = n
  }

  const n = s.custom.totalPts
  const headlines = [
    { start: 5, text: 'Fed hints at rate cut', sent: 0.6 },
    { start: 25, text: 'Inflation data misses', sent: -0.5 },
    { start: 45, text: 'Tech earnings beat', sent: 0.7 },
    { start: 65, text: 'Trade tensions rise', sent: -0.6 },
    { start: 85, text: 'Jobs report strong', sent: 0.4 },
    { start: 105, text: 'GDP growth slows', sent: -0.4 },
  ]

  // Mouse X controls visible window
  const viewLen = 50
  const scrollRange = n - viewLen
  const scrollPos = s.mouseX >= 0
    ? Math.floor((s.mouseX / w) * scrollRange)
    : Math.floor((t * 4) % scrollRange)
  const start = Math.max(0, Math.min(scrollRange, scrollPos))

  // -- Price chart (top 60%) --
  const chartX = 30
  const chartY = 6
  const chartW = w - chartX - 6
  const chartH = h * 0.52

  // Find price range
  let minP = Infinity, maxP = -Infinity
  for (let i = start; i < start + viewLen; i++) {
    const p = s.custom['p' + i] ?? 450
    if (p < minP) minP = p
    if (p > maxP) maxP = p
  }
  const range = maxP - minP || 1
  minP -= range * 0.1; maxP += range * 0.1
  const fullRange = maxP - minP

  // Y axis labels
  ctx.fillStyle = 'rgba(200,208,216,0.3)'
  ctx.font = '7px JetBrains Mono'
  ctx.fillText(maxP.toFixed(0), 2, chartY + 8)
  ctx.fillText(minP.toFixed(0), 2, chartY + chartH)

  // Chart border
  ctx.strokeStyle = 'rgba(0,230,118,0.1)'
  ctx.lineWidth = 0.5
  ctx.strokeRect(chartX, chartY, chartW, chartH)

  // Grid lines
  for (let g = 0; g < 4; g++) {
    const gy = chartY + (g / 3) * chartH
    ctx.beginPath(); ctx.moveTo(chartX, gy); ctx.lineTo(chartX + chartW, gy); ctx.stroke()
  }

  // Price line
  ctx.strokeStyle = '#00e676'
  ctx.lineWidth = 1.5
  ctx.beginPath()
  for (let i = 0; i < viewLen; i++) {
    const x = chartX + (i / (viewLen - 1)) * chartW
    const p = s.custom['p' + (start + i)] ?? 450
    const y = chartY + chartH - ((p - minP) / fullRange) * chartH
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
  }
  ctx.stroke()

  // Fill under price line
  const lastX = chartX + chartW
  const lastP = s.custom['p' + (start + viewLen - 1)] ?? 450
  const lastY = chartY + chartH - ((lastP - minP) / fullRange) * chartH
  ctx.lineTo(lastX, chartY + chartH)
  ctx.lineTo(chartX, chartY + chartH)
  ctx.closePath()
  ctx.fillStyle = 'rgba(0, 230, 118, 0.04)'
  ctx.fill()

  // Buy/sell markers
  for (let i = 0; i < viewLen; i++) {
    const sig = s.custom['sig' + (start + i)] ?? 0
    if (sig === 0) continue
    const x = chartX + (i / (viewLen - 1)) * chartW
    const p = s.custom['p' + (start + i)] ?? 450
    const y = chartY + chartH - ((p - minP) / fullRange) * chartH

    if (sig === 1) {
      // Buy: green triangle up
      ctx.fillStyle = '#00e676'
      ctx.beginPath()
      ctx.moveTo(x, y - 2); ctx.lineTo(x - 4, y + 6); ctx.lineTo(x + 4, y + 6)
      ctx.fill()
    } else {
      // Sell: orange triangle down
      ctx.fillStyle = '#ff6d3a'
      ctx.beginPath()
      ctx.moveTo(x, y + 2); ctx.lineTo(x - 4, y - 6); ctx.lineTo(x + 4, y - 6)
      ctx.fill()
    }
  }

  // SPY label
  ctx.fillStyle = '#00e676'
  ctx.font = '8px JetBrains Mono'
  ctx.fillText('SPY', chartX + 4, chartY + 12)
  const curPrice = s.custom['p' + (start + viewLen - 1)] ?? 450
  ctx.fillText(`$${curPrice.toFixed(2)}`, chartX + 28, chartY + 12)

  // -- Pipeline section (bottom 40%) --
  const pipeY = chartY + chartH + 10

  // Find active headline for current window
  let activeHL = headlines[0]!
  for (const hl of headlines) {
    if (hl.start >= start && hl.start < start + viewLen) { activeHL = hl; break }
  }

  // Pipeline: NEWS → NLP → SIGNAL → EXECUTE
  const stages = ['NEWS', 'NLP', 'SIGNAL', 'EXECUTE']
  const stageW = (w - 16) / stages.length
  ctx.font = '7px JetBrains Mono'

  for (let i = 0; i < stages.length; i++) {
    const sx = 8 + i * stageW
    // Box
    ctx.strokeStyle = 'rgba(0,230,118,0.2)'
    ctx.lineWidth = 0.5
    ctx.strokeRect(sx, pipeY, stageW - 8, 16)

    // Label
    ctx.fillStyle = 'rgba(0,230,118,0.5)'
    ctx.fillText(stages[i]!, sx + 3, pipeY + 11)

    // Arrow between stages
    if (i < stages.length - 1) {
      ctx.strokeStyle = 'rgba(0,230,118,0.2)'
      ctx.beginPath()
      ctx.moveTo(sx + stageW - 8, pipeY + 8)
      ctx.lineTo(sx + stageW - 2, pipeY + 8)
      ctx.stroke()
    }
  }

  // Show active headline below pipeline
  const detailY = pipeY + 24
  ctx.font = '8px JetBrains Mono'
  // Color headline by sentiment
  ctx.fillStyle = activeHL.sent > 0 ? '#00e676' : '#ff6d3a'
  ctx.fillText(`"${activeHL.text}"`, 8, detailY)

  // Sentiment score
  const sentLabel = activeHL.sent > 0.2 ? 'BULLISH' : activeHL.sent < -0.2 ? 'BEARISH' : 'NEUTRAL'
  ctx.fillStyle = activeHL.sent > 0 ? '#00e676' : '#ff6d3a'
  ctx.font = '8px JetBrains Mono'
  ctx.fillText(`${sentLabel} (${activeHL.sent > 0 ? '+' : ''}${activeHL.sent.toFixed(1)})`, 8, detailY + 12)

  // Trade action
  const action = activeHL.sent > 0.2 ? 'BUY SPY' : activeHL.sent < -0.2 ? 'SELL SPY' : 'HOLD'
  const actColor = activeHL.sent > 0.2 ? '#00e676' : activeHL.sent < -0.2 ? '#ff6d3a' : '#7b8594'
  ctx.fillStyle = actColor
  ctx.font = '9px JetBrains Mono'
  ctx.fillText(`\u2192 ${action}`, w * 0.55, detailY + 6)

  ctx.fillStyle = 'rgba(200,208,216,0.3)'
  ctx.font = '7px JetBrains Mono'
  ctx.fillText('drag to scroll timeline', 8, h - 3)
}

// ---- ML Gym App: Pose Estimation with Keypoint Detection ----
const poseEstimation: SimRenderer = (ctx, w, h, t, s) => {
  const cx = w * 0.35
  const cy = h * 0.38

  // Animated exercise (squat cycle)
  const cycle = Math.sin(t * 1.8) * 0.5 + 0.5 // 0–1
  const squat = s.mouseY >= 0 ? s.mouseY / h : cycle

  // Keypoints with confidence
  const keypoints: { name: string; x: number; y: number; conf: number }[] = [
    { name: 'head', x: cx, y: cy - 18 + squat * 6, conf: 0.97 },
    { name: 'l_shoulder', x: cx - 14, y: cy + squat * 8, conf: 0.95 },
    { name: 'r_shoulder', x: cx + 14, y: cy + squat * 8, conf: 0.96 },
    { name: 'l_elbow', x: cx - 22, y: cy + 14 + squat * 10, conf: 0.91 },
    { name: 'r_elbow', x: cx + 22, y: cy + 14 + squat * 10, conf: 0.93 },
    { name: 'l_hip', x: cx - 8, y: cy + 26 + squat * 12, conf: 0.94 },
    { name: 'r_hip', x: cx + 8, y: cy + 26 + squat * 12, conf: 0.95 },
    { name: 'l_knee', x: cx - 12 - squat * 6, y: cy + 46 + squat * 16, conf: 0.89 },
    { name: 'r_knee', x: cx + 12 + squat * 6, y: cy + 46 + squat * 16, conf: 0.90 },
    { name: 'l_ankle', x: cx - 10, y: cy + 66 + squat * 8, conf: 0.85 },
    { name: 'r_ankle', x: cx + 10, y: cy + 66 + squat * 8, conf: 0.87 },
  ]

  // Skeleton connections
  const bones: [number, number][] = [
    [0, 1], [0, 2], [1, 3], [2, 4], [1, 5], [2, 6], [5, 7], [6, 8], [7, 9], [8, 10], [5, 6]
  ]

  // Draw skeleton
  ctx.strokeStyle = 'rgba(0, 230, 118, 0.4)'
  ctx.lineWidth = 2
  for (const [a, b] of bones) {
    ctx.beginPath()
    ctx.moveTo(keypoints[a]!.x, keypoints[a]!.y)
    ctx.lineTo(keypoints[b]!.x, keypoints[b]!.y)
    ctx.stroke()
  }

  // Draw keypoints with confidence rings
  for (const kp of keypoints) {
    // Confidence ring
    ctx.strokeStyle = `rgba(0, 230, 118, ${kp.conf * 0.4})`
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.arc(kp.x, kp.y, 4 + (1 - kp.conf) * 10, 0, Math.PI * 2); ctx.stroke()

    // Point
    ctx.fillStyle = kp.conf > 0.9 ? '#00e676' : '#ff6d3a'
    ctx.beginPath(); ctx.arc(kp.x, kp.y, 2.5, 0, Math.PI * 2); ctx.fill()
  }

  // Right panel: detection info
  const panelX = w * 0.6
  ctx.fillStyle = '#00e676'
  ctx.font = '9px JetBrains Mono'
  ctx.fillText('KEYPOINTS DETECTED', panelX, 12)

  // Show nearby keypoint detail on hover
  let highlighted = -1
  if (s.mouseX >= 0) {
    let minD = 20
    for (let i = 0; i < keypoints.length; i++) {
      const d = Math.sqrt((s.mouseX - keypoints[i]!.x) ** 2 + (s.mouseY - keypoints[i]!.y) ** 2)
      if (d < minD) { minD = d; highlighted = i }
    }
  }

  // List keypoints with confidence
  ctx.font = '8px JetBrains Mono'
  const shown = highlighted >= 0 ? [keypoints[highlighted]!] : keypoints.slice(0, 6)
  for (let i = 0; i < shown.length; i++) {
    const kp = shown[i]!
    ctx.fillStyle = kp.conf > 0.9 ? '#00e676' : '#ff6d3a'
    ctx.fillText(`${kp.name}`, panelX, 26 + i * 11)
    ctx.fillStyle = '#7b8594'
    ctx.fillText(`${(kp.conf * 100).toFixed(0)}%`, panelX + 70, 26 + i * 11)
  }

  // Knee angle calculation
  const lKnee = keypoints[7]!
  const lHip = keypoints[5]!
  const lAnkle = keypoints[9]!
  const angle = Math.atan2(lAnkle.y - lKnee.y, lAnkle.x - lKnee.x) -
                Math.atan2(lHip.y - lKnee.y, lHip.x - lKnee.x)
  const deg = Math.abs(angle * 57.3)

  ctx.fillStyle = '#00e676'
  ctx.font = '9px JetBrains Mono'
  ctx.fillText(`knee: ${deg.toFixed(0)}\u00B0`, panelX, h - 14)

  ctx.fillStyle = 'rgba(200,208,216,0.35)'
  ctx.fillText('mouse \u2195 = squat depth', 4, h - 4)
}

// ---- AFib Detection: SVM Feature Space ----
// 2D scatter plot with SVM decision boundary
const svmClassifier: SimRenderer = (ctx, w, h, t, s) => {
  const plotX = 8
  const plotY = 8
  const plotW = w * 0.55
  const plotH = h - 20

  // Axes
  ctx.strokeStyle = 'rgba(0, 230, 118, 0.2)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(plotX, plotY); ctx.lineTo(plotX, plotY + plotH)
  ctx.lineTo(plotX + plotW, plotY + plotH)
  ctx.stroke()

  // Axis labels
  ctx.fillStyle = '#7b8594'
  ctx.font = '7px JetBrains Mono'
  ctx.fillText('HRV', plotX + plotW / 2 - 8, plotY + plotH + 10)
  ctx.save()
  ctx.translate(plotX - 2, plotY + plotH / 2)
  ctx.rotate(-Math.PI / 2)
  ctx.fillText('RR interval', -20, 0)
  ctx.restore()

  // Generate data points (stable)
  let seed = 55
  const rng = () => { seed = (seed * 1664525 + 1013904223) & 0xffffffff; return (seed >>> 0) / 4294967296 }

  const normalPts: { x: number; y: number }[] = []
  const afibPts: { x: number; y: number }[] = []
  for (let i = 0; i < 15; i++) {
    normalPts.push({ x: 0.25 + rng() * 0.35, y: 0.55 + rng() * 0.3 })
    afibPts.push({ x: 0.55 + rng() * 0.35, y: 0.15 + rng() * 0.35 })
  }

  // SVM decision boundary (diagonal line)
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'
  ctx.lineWidth = 1
  ctx.setLineDash([4, 3])
  ctx.beginPath()
  ctx.moveTo(plotX + plotW * 0.1, plotY + plotH * 0.15)
  ctx.lineTo(plotX + plotW * 0.9, plotY + plotH * 0.85)
  ctx.stroke()
  ctx.setLineDash([])

  // Margin bands
  ctx.fillStyle = 'rgba(0, 230, 118, 0.04)'
  ctx.beginPath()
  ctx.moveTo(plotX + plotW * 0.05, plotY + plotH * 0.15)
  ctx.lineTo(plotX + plotW * 0.85, plotY + plotH * 0.85)
  ctx.lineTo(plotX + plotW * 0.95, plotY + plotH * 0.85)
  ctx.lineTo(plotX + plotW * 0.15, plotY + plotH * 0.15)
  ctx.fill()

  // Draw points
  for (const p of normalPts) {
    ctx.fillStyle = 'rgba(0, 230, 118, 0.6)'
    ctx.beginPath()
    ctx.arc(plotX + p.x * plotW, plotY + (1 - p.y) * plotH, 3, 0, Math.PI * 2)
    ctx.fill()
  }
  for (const p of afibPts) {
    ctx.fillStyle = 'rgba(255, 109, 58, 0.6)'
    ctx.beginPath()
    ctx.arc(plotX + p.x * plotW, plotY + (1 - p.y) * plotH, 3, 0, Math.PI * 2)
    ctx.fill()
  }

  // Click to classify a new point
  if (s.clicked && s.clickX < plotX + plotW) {
    const nx = (s.clickX - plotX) / plotW
    const ny = 1 - (s.clickY - plotY) / plotH
    s.custom.testX = nx
    s.custom.testY = ny
    // Classify: above line = AFib, below = Normal
    s.custom.testClass = (ny > 0.15 + (nx - 0.1) * 0.875) ? 0 : 1 // 0=normal, 1=afib
  }

  // Draw test point
  if (s.custom.testX !== undefined) {
    const tx = plotX + s.custom.testX * plotW
    const ty = plotY + (1 - s.custom.testY) * plotH
    const isAfib = s.custom.testClass === 1
    ctx.strokeStyle = isAfib ? '#ff6d3a' : '#00e676'
    ctx.lineWidth = 2
    ctx.beginPath(); ctx.arc(tx, ty, 6, 0, Math.PI * 2); ctx.stroke()
    ctx.fillStyle = isAfib ? '#ff6d3a' : '#00e676'
    ctx.beginPath(); ctx.arc(tx, ty, 2, 0, Math.PI * 2); ctx.fill()
  }

  // Legend (right side)
  const legX = w * 0.62
  ctx.fillStyle = '#00e676'
  ctx.font = '9px JetBrains Mono'
  ctx.fillText('SVM CLASSIFIER', legX, 14)

  ctx.fillStyle = 'rgba(0, 230, 118, 0.6)'
  ctx.beginPath(); ctx.arc(legX + 4, 28, 3, 0, Math.PI * 2); ctx.fill()
  ctx.fillStyle = '#c8d0d8'
  ctx.font = '8px JetBrains Mono'
  ctx.fillText('Normal', legX + 12, 31)

  ctx.fillStyle = 'rgba(255, 109, 58, 0.6)'
  ctx.beginPath(); ctx.arc(legX + 4, 42, 3, 0, Math.PI * 2); ctx.fill()
  ctx.fillStyle = '#c8d0d8'
  ctx.fillText('AFib', legX + 12, 45)

  ctx.fillStyle = '#7b8594'
  ctx.fillText('margin', legX + 12, 59)

  if (s.custom.testClass !== undefined) {
    ctx.fillStyle = s.custom.testClass === 1 ? '#ff6d3a' : '#00e676'
    ctx.font = '10px JetBrains Mono'
    ctx.fillText(s.custom.testClass === 1 ? 'AFIB' : 'NORMAL', legX, h - 14)
  }

  ctx.fillStyle = 'rgba(200,208,216,0.35)'
  ctx.font = '9px JetBrains Mono'
  ctx.fillText('click to classify', legX, h - 4)
}

// ---- Gene Sequence: DNA Pattern Matching (kept from before, enhanced) ----
const geneSequence: SimRenderer = (ctx, w, h, t, s) => {
  const bases = 'ATCGATCGAATTCCGGAATCGATCGTTAACCGGAATCGAATTCCGG'
  const colors: Record<string, string> = { A: '#00e676', T: '#ff6d3a', C: '#42a5f5', G: '#ffd740' }

  const scrollOffset = Math.floor(t * 3) % 10
  const bw = 10
  const bh = h * 0.5
  const baseY = (h - bh) / 2

  for (let i = 0; i < Math.ceil(w / (bw + 2)); i++) {
    const idx = (i + scrollOffset) % bases.length
    const base = bases[idx]!
    const x = i * (bw + 2)
    const barH = bh * (0.5 + Math.sin(i * 0.5 + t) * 0.3)

    ctx.fillStyle = colors[base] || '#00e676'
    ctx.globalAlpha = 0.5
    ctx.fillRect(x, baseY + (bh - barH) / 2, bw, barH)

    ctx.globalAlpha = 0.8
    ctx.font = '9px JetBrains Mono'
    ctx.fillText(base, x + 1, baseY - 3)
  }
  ctx.globalAlpha = 1

  if (s.mouseX >= 0) {
    const hoverIdx = Math.floor(s.mouseX / (bw + 2))
    const hx = hoverIdx * (bw + 2)
    ctx.strokeStyle = 'rgba(255,255,255,0.4)'
    ctx.lineWidth = 1
    ctx.strokeRect(hx - 1, baseY - 12, (bw + 2) * 3, bh + 16)
    const c1 = bases[(hoverIdx + scrollOffset) % bases.length]
    const c2 = bases[(hoverIdx + scrollOffset + 1) % bases.length]
    const c3 = bases[(hoverIdx + scrollOffset + 2) % bases.length]
    ctx.fillStyle = '#c8d0d8'
    ctx.font = '10px JetBrains Mono'
    ctx.fillText(`${c1}${c2}${c3}`, hx, h - 4)
  }

  ctx.fillStyle = 'rgba(200,208,216,0.35)'
  ctx.font = '9px JetBrains Mono'
  ctx.fillText('hover codons', w - 82, h - 4)
}

// ---- Mobile QA Engine: Automated Device Testing ----
// Phone outline with test steps executing, pass/fail results, and a live progress bar.
// Hover over completed steps to see the action type.
const mobileQA: SimRenderer = (ctx, w, h, t, s) => {
  // --- Phone outline (left side) ---
  const phoneX = 8
  const phoneY = 8
  const phoneW = w * 0.28
  const phoneH = h - 16
  const cornerR = 8
  const notchW = phoneW * 0.35

  // Phone bezel
  ctx.strokeStyle = 'rgba(0, 230, 118, 0.3)'
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.roundRect(phoneX, phoneY, phoneW, phoneH, cornerR)
  ctx.stroke()

  // Notch
  ctx.fillStyle = '#0a0a0f'
  ctx.strokeStyle = 'rgba(0, 230, 118, 0.2)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.roundRect(phoneX + (phoneW - notchW) / 2, phoneY - 1, notchW, 8, [0, 0, 4, 4])
  ctx.fill()
  ctx.stroke()

  // Screen content — fake app elements
  const screenX = phoneX + 4
  const screenY = phoneY + 12
  const screenW = phoneW - 8
  const screenH = phoneH - 20

  // Status bar
  ctx.fillStyle = 'rgba(0, 230, 118, 0.2)'
  ctx.fillRect(screenX, screenY, screenW, 2)

  // Nav bar placeholder
  ctx.fillStyle = 'rgba(200, 208, 216, 0.08)'
  ctx.fillRect(screenX, screenY + 5, screenW, 8)
  ctx.fillStyle = 'rgba(200, 208, 216, 0.2)'
  ctx.font = '5px JetBrains Mono'
  ctx.fillText('App Under Test', screenX + 2, screenY + 11)

  // Content blocks (simulated UI)
  for (let i = 0; i < 4; i++) {
    const bY = screenY + 18 + i * (screenH * 0.18)
    const bH = screenH * 0.13
    ctx.fillStyle = 'rgba(200, 208, 216, 0.04)'
    ctx.fillRect(screenX + 2, bY, screenW - 4, bH)

    // Animated tap indicator
    const tapPhase = (t * 1.5 + i * 2.3) % 8
    if (tapPhase > 0 && tapPhase < 0.6) {
      const rippleR = tapPhase * 18
      ctx.strokeStyle = `rgba(0, 230, 118, ${0.5 - tapPhase * 0.7})`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(screenX + screenW / 2, bY + bH / 2, rippleR, 0, Math.PI * 2)
      ctx.stroke()
    }
  }

  // --- Test execution log (right side) ---
  const logX = phoneX + phoneW + 14
  const logW = w - logX - 4
  const steps = [
    { action: 'launch', target: 'com.app.test', icon: '\u25B6' },
    { action: 'tap', target: 'Sign In button', icon: '\u25CF' },
    { action: 'type', target: 'email field', icon: '\u2328' },
    { action: 'swipe', target: 'scroll down', icon: '\u2195' },
    { action: 'assert', target: 'dashboard visible', icon: '\u2714' },
    { action: 'screenshot', target: 'capture state', icon: '\u25A3' },
    { action: 'tap', target: 'Settings tab', icon: '\u25CF' },
    { action: 'assert', target: 'profile loaded', icon: '\u2714' },
  ]

  const totalCycle = 12
  const progress = (t * 0.8) % totalCycle
  const completedSteps = Math.min(steps.length, Math.floor(progress * steps.length / totalCycle))

  ctx.fillStyle = 'rgba(200, 208, 216, 0.35)'
  ctx.font = '7px JetBrains Mono'
  ctx.fillText('QA EXECUTION LOG', logX, 12)

  // Progress bar
  const barY = 18
  const barH = 3
  ctx.fillStyle = 'rgba(0, 230, 118, 0.1)'
  ctx.fillRect(logX, barY, logW, barH)
  const pct = completedSteps / steps.length
  ctx.fillStyle = pct >= 1 ? '#00e676' : 'rgba(0, 230, 118, 0.5)'
  ctx.fillRect(logX, barY, logW * pct, barH)

  // Step list
  const stepH = 14
  const listY = 28
  for (let i = 0; i < steps.length; i++) {
    const sy = listY + i * stepH
    if (sy + stepH > h - 12) break
    const step = steps[i]!
    const done = i < completedSteps
    const active = i === completedSteps && progress < totalCycle

    const hovered = s.mouseX >= logX && s.mouseX <= logX + logW &&
      s.mouseY >= sy && s.mouseY <= sy + stepH

    // Status indicator
    if (done) {
      ctx.fillStyle = '#00e676'
      ctx.font = '8px JetBrains Mono'
      ctx.fillText('\u2713', logX, sy + 9)
    } else if (active) {
      ctx.fillStyle = `rgba(0, 230, 118, ${0.4 + Math.sin(t * 6) * 0.3})`
      ctx.beginPath()
      ctx.arc(logX + 3, sy + 6, 2, 0, Math.PI * 2)
      ctx.fill()
    } else {
      ctx.fillStyle = 'rgba(123, 133, 148, 0.3)'
      ctx.beginPath()
      ctx.arc(logX + 3, sy + 6, 2, 0, Math.PI * 2)
      ctx.fill()
    }

    // Step text
    ctx.fillStyle = done ? 'rgba(200, 208, 216, 0.7)' : active ? '#c8d0d8' : 'rgba(123, 133, 148, 0.4)'
    ctx.font = '8px JetBrains Mono'
    ctx.fillText(`${step.icon} ${step.action}`, logX + 10, sy + 9)

    // Show target on hover
    if (hovered && done) {
      ctx.fillStyle = 'rgba(0, 230, 118, 0.5)'
      ctx.font = '7px JetBrains Mono'
      ctx.fillText(step.target, logX + 10, sy + 9 + stepH * 0.7)
    }
  }

  // Summary when all done
  if (completedSteps >= steps.length) {
    const sumY = h - 16
    ctx.fillStyle = '#00e676'
    ctx.font = '9px JetBrains Mono'
    ctx.fillText(`${steps.length}/${steps.length} PASSED`, logX, sumY)
    ctx.fillStyle = 'rgba(0, 230, 118, 0.3)'
    ctx.font = '7px JetBrains Mono'
    ctx.fillText('0 failures', logX + 70, sumY)
  }

  ctx.fillStyle = 'rgba(200,208,216,0.3)'
  ctx.font = '9px JetBrains Mono'
  ctx.fillText('hover steps', logX, h - 4)
}

// ---- 0risk.ai: Intraoperative OR Monitor ----
// Live vital-sign waveforms with risk indicators that surface based on phase.
// Hover over a risk card to see the driver text.
const orMonitor: SimRenderer = (ctx, w, h, t, s) => {
  // --- Vitals waveforms (left 55%) ---
  const vitalW = w * 0.52
  const waveforms = [
    { label: 'ECG II', color: '#00e676', freq: 4.2, amp: 0.8, spike: true },
    { label: 'ART', color: '#ff6d3a', freq: 1.8, amp: 0.6, spike: false },
    { label: 'PLETH', color: '#42a5f5', freq: 1.8, amp: 0.5, spike: false },
  ]
  const wfH = (h - 30) / waveforms.length

  for (let wi = 0; wi < waveforms.length; wi++) {
    const wf = waveforms[wi]!
    const baseY = 14 + wi * wfH + wfH / 2

    // Label
    ctx.fillStyle = wf.color
    ctx.globalAlpha = 0.5
    ctx.font = '7px JetBrains Mono'
    ctx.fillText(wf.label, 4, baseY - wfH * 0.35)
    ctx.globalAlpha = 1

    // Waveform
    ctx.strokeStyle = wf.color
    ctx.lineWidth = 1.2
    ctx.beginPath()
    for (let px = 0; px < vitalW; px++) {
      const phase = (px / vitalW) * Math.PI * 8 + t * wf.freq
      let y: number
      if (wf.spike) {
        // ECG-like QRS complex
        const p = ((phase % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)
        const norm = p / (Math.PI * 2)
        if (norm > 0.38 && norm < 0.42) y = -wf.amp * 3.5
        else if (norm > 0.42 && norm < 0.44) y = wf.amp * 1.2
        else if (norm > 0.44 && norm < 0.46) y = -wf.amp * 0.3
        else y = Math.sin(phase * 0.3) * wf.amp * 0.08
      } else {
        y = Math.sin(phase) * wf.amp
        if (wf.label === 'ART') y += Math.sin(phase * 2.1) * wf.amp * 0.3
      }
      const py = baseY + y * wfH * 0.35
      px === 0 ? ctx.moveTo(px + 2, py) : ctx.lineTo(px + 2, py)
    }
    ctx.stroke()

    // Glow
    ctx.globalAlpha = 0.1
    ctx.lineWidth = 4
    ctx.stroke()
    ctx.globalAlpha = 1
    ctx.lineWidth = 1
  }

  // Separator line
  ctx.strokeStyle = 'rgba(0, 230, 118, 0.15)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(vitalW + 6, 4)
  ctx.lineTo(vitalW + 6, h - 4)
  ctx.stroke()

  // --- Vitals readout row (bottom left) ---
  const vitals = [
    { label: 'HR', value: 72 + Math.floor(Math.sin(t * 0.4) * 3), color: '#00e676' },
    { label: 'MAP', value: 85 + Math.floor(Math.sin(t * 0.25) * 4), color: '#ff6d3a' },
    { label: 'SpO\u2082', value: 98 + Math.floor(Math.sin(t * 0.15) * 1), color: '#42a5f5' },
  ]
  const vRowY = h - 10
  const vSpacing = vitalW / vitals.length
  for (let i = 0; i < vitals.length; i++) {
    const v = vitals[i]!
    const vx = 4 + i * vSpacing
    ctx.fillStyle = 'rgba(200,208,216,0.35)'
    ctx.font = '7px JetBrains Mono'
    ctx.fillText(v.label, vx, vRowY)
    ctx.fillStyle = v.color
    ctx.font = '10px JetBrains Mono'
    ctx.fillText(`${v.value}`, vx + 26, vRowY)
  }

  // --- Right panel: Situational Awareness ---
  const panelX = vitalW + 14
  const panelW = w - panelX - 4

  // Phase indicator
  const phases = ['PRE-OP', 'INCISION', 'BONE PREP', 'IMPLANT', 'CLOSURE']
  const phaseIdx = Math.floor((t * 0.15) % phases.length)
  ctx.fillStyle = 'rgba(200,208,216,0.35)'
  ctx.font = '7px JetBrains Mono'
  ctx.fillText('PHASE', panelX, 12)
  ctx.fillStyle = '#00e676'
  ctx.font = '9px JetBrains Mono'
  ctx.fillText(phases[phaseIdx]!, panelX, 23)

  // Risk cards
  type RiskCard = { level: string; color: string; driver: string; detail: string }
  const risks: RiskCard[] = [
    { level: 'YELLOW', color: '#ffd740', driver: 'MAP trending low', detail: 'Systolic drift >15%' },
    { level: 'RED', color: '#ff6d3a', driver: 'HR above baseline', detail: 'Sustained +20 bpm' },
  ]

  // Show 0-2 risks based on time cycle
  const cycle = (t * 0.3) % 10
  const activeRisks = cycle < 3 ? 0 : cycle < 7 ? 1 : 2
  const cardH = 28
  const cardGap = 4
  const cardsY = 32

  if (activeRisks === 0) {
    ctx.fillStyle = 'rgba(0, 230, 118, 0.25)'
    ctx.font = '9px JetBrains Mono'
    ctx.fillText('NO ACTIVE RISKS', panelX, cardsY + 14)
    ctx.fillStyle = 'rgba(0, 230, 118, 0.12)'
    ctx.beginPath()
    ctx.arc(panelX + panelW / 2, cardsY + 40, 12, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = '#00e676'
    ctx.font = '14px JetBrains Mono'
    ctx.fillText('\u2713', panelX + panelW / 2 - 5, cardsY + 45)
  }

  for (let ri = 0; ri < activeRisks && ri < risks.length; ri++) {
    const risk = risks[ri]!
    const cy = cardsY + ri * (cardH + cardGap)

    // Card background
    const hovered = s.mouseX >= panelX && s.mouseX <= panelX + panelW &&
      s.mouseY >= cy && s.mouseY <= cy + cardH
    ctx.fillStyle = hovered ? `rgba(${risk.color === '#ffd740' ? '255,215,64' : '255,109,58'},0.12)` : 'rgba(255,255,255,0.03)'
    ctx.fillRect(panelX, cy, panelW, cardH)

    // Left color bar
    ctx.fillStyle = risk.color
    ctx.fillRect(panelX, cy, 3, cardH)

    // Level + driver
    ctx.fillStyle = risk.color
    ctx.font = '7px JetBrains Mono'
    ctx.fillText(risk.level, panelX + 8, cy + 10)
    ctx.fillStyle = '#c8d0d8'
    ctx.font = '8px JetBrains Mono'
    ctx.fillText(risk.driver, panelX + 8, cy + 21)

    // Detail on hover
    if (hovered) {
      ctx.fillStyle = 'rgba(200,208,216,0.5)'
      ctx.font = '7px JetBrains Mono'
      ctx.fillText(risk.detail, panelX + 8, cy + cardH + 10)
    }
  }

  // Separator glow when critical risk active
  if (activeRisks >= 2) {
    ctx.strokeStyle = `rgba(255, 109, 58, ${0.15 + Math.sin(t * 3) * 0.1})`
    ctx.lineWidth = 2
    ctx.shadowColor = 'rgba(255, 109, 58, 0.4)'
    ctx.shadowBlur = 8
    ctx.beginPath()
    ctx.moveTo(vitalW + 6, 4)
    ctx.lineTo(vitalW + 6, h - 4)
    ctx.stroke()
    ctx.shadowBlur = 0
  }

  ctx.fillStyle = 'rgba(200,208,216,0.3)'
  ctx.font = '9px JetBrains Mono'
  ctx.fillText('hover risks', panelX, h - 4)
}

// ---- Registry ----
const SIMS: Record<string, SimRenderer> = {
  gluco: beerLambert,
  zerisk: orMonitor,
  mobileqa: mobileQA,
  tumor: cnnConvolution,
  trading: nlpSentiment,
  gym: poseEstimation,
  afib: svmClassifier,
  gene: geneSequence,
}

const canvasStates = new WeakMap<HTMLCanvasElement, SimState>()

function getState(canvas: HTMLCanvasElement): SimState {
  let s = canvasStates.get(canvas)
  if (!s) {
    s = { mouseX: -1, mouseY: -1, mouseDown: false, clicked: false, clickX: 0, clickY: 0, custom: {} }
    canvasStates.set(canvas, s)
  }
  return s
}

export function initSimEvents(canvas: HTMLCanvasElement): void {
  const s = getState(canvas)
  canvas.addEventListener('mousemove', (e) => {
    const r = canvas.getBoundingClientRect()
    s.mouseX = e.clientX - r.left
    s.mouseY = e.clientY - r.top
  })
  canvas.addEventListener('mouseleave', () => { s.mouseX = -1; s.mouseY = -1; s.mouseDown = false })
  canvas.addEventListener('mousedown', (e) => {
    s.mouseDown = true
    e.preventDefault()
  })
  canvas.addEventListener('mouseup', () => { s.mouseDown = false })
  window.addEventListener('mouseup', () => { s.mouseDown = false })
  canvas.addEventListener('click', (e) => {
    const r = canvas.getBoundingClientRect()
    s.clicked = true
    s.clickX = e.clientX - r.left
    s.clickY = e.clientY - r.top
    e.stopPropagation()
  })
}

export function drawMiniSignal(canvas: HTMLCanvasElement, id: string, t: number, color: string): void {
  const renderer = SIMS[id]
  if (!renderer) return

  const dpr = window.devicePixelRatio || 1
  const w = canvas.clientWidth
  const h = canvas.clientHeight
  if (w <= 0 || h <= 0) return

  const cw = Math.ceil(w * dpr)
  const ch = Math.ceil(h * dpr)
  if (canvas.width !== cw || canvas.height !== ch) { canvas.width = cw; canvas.height = ch }

  const s = getState(canvas)
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, cw, ch)
  ctx.save()
  ctx.scale(dpr, dpr)
  renderer(ctx, w, h, t, s)
  s.clicked = false
  ctx.restore()
}
