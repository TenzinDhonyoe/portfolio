import { renderDesign, renderPage } from './render.ts'

const server = Bun.serve({
  port: Number(process.env.PORT) || 3000,
  async fetch(req) {
    const url = new URL(req.url)
    const path = url.pathname === '/' ? '/index.html' : url.pathname

    // Serve the bundled JS for main.ts
    if (path === '/main.js') {
      const result = await Bun.build({
        entrypoints: ['./main.ts'],
        format: 'esm',
        minify: false,
      })
      const output = result.outputs[0]
      if (!output) return new Response(result.logs.join('\n') || 'Build failed', { status: 500 })
      return new Response(output.stream(), {
        headers: { 'Content-Type': 'application/javascript' },
      })
    }

    // The page, with data.ts filled in
    if (path === '/index.html') {
      const html = await Bun.file('./index.html').text()
      return new Response(renderPage(html), { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
    }

    // The design prompt, with particle-kit/DESIGN.md filled in
    if (path === '/design' || path === '/design/') {
      const [html, design] = await Promise.all([Bun.file('./design.html').text(), Bun.file('./particle-kit/DESIGN.md').text()])
      return new Response(renderDesign(html, design), { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
    }

    // Serve static files
    const file = Bun.file(`.${path}`)
    if (await file.exists()) {
      return new Response(file)
    }

    return new Response('Not found', { status: 404 })
  },
})

console.log(`Dev server running at http://localhost:${server.port}`)
