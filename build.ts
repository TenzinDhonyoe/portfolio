import { cp, rm } from 'node:fs/promises'
import { renderDesign, renderPage } from './render.ts'

await rm('./dist', { recursive: true, force: true })

const result = await Bun.build({
  entrypoints: ['./main.ts'],
  outdir: './dist',
  format: 'esm',
  minify: true,
})

if (result.success) {
  const html = await Bun.file('./index.html').text()
  await Bun.write('./dist/index.html', renderPage(html))
  const [designHtml, design] = await Promise.all([Bun.file('./design.html').text(), Bun.file('./particle-kit/DESIGN.md').text()])
  await Bun.write('./dist/design/index.html', renderDesign(designHtml, design))
  await cp('./assets', './dist/assets', { recursive: true })
  console.log('Build complete → dist/')
} else {
  console.error('Build failed:', result.logs)
  process.exit(1)
}
