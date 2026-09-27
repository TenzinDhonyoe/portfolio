// Preview the kit: `bun particle-kit/demo/serve.ts`, then open
// http://localhost:3456. Bundles demo.ts on every request, like the site's
// own serve.ts.
const dir = import.meta.dir

const server = Bun.serve({
  port: 3456,
  async fetch(req) {
    const path = new URL(req.url).pathname
    if (path === '/demo.js') {
      const result = await Bun.build({ entrypoints: [`${dir}/demo.ts`], format: 'esm' })
      const out = result.outputs[0]
      if (!out) return new Response(result.logs.join('\n'), { status: 500 })
      return new Response(out.stream(), { headers: { 'Content-Type': 'application/javascript' } })
    }
    const file = Bun.file(`${dir}${path === '/' ? '/index.html' : path}`)
    return (await file.exists()) ? new Response(file) : new Response('Not found', { status: 404 })
  },
})

console.log(`Particle kit demo at http://localhost:${server.port}`)
