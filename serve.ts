const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url)
    let path = url.pathname === '/' ? '/index.html' : url.pathname

    // Serve the bundled JS for main.ts
    if (path === '/main.js') {
      const result = await Bun.build({
        entrypoints: ['./main.ts'],
        format: 'esm',
        minify: false,
      })
      const output = result.outputs[0]
      if (!output) return new Response('Build failed', { status: 500 })
      return new Response(output.stream(), {
        headers: { 'Content-Type': 'application/javascript' },
      })
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
