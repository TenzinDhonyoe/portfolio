const result = await Bun.build({
  entrypoints: ['./main.ts'],
  outdir: './dist',
  format: 'esm',
  minify: true,
})

if (result.success) {
  // Copy index.html to dist
  const html = await Bun.file('./index.html').text()
  await Bun.write('./dist/index.html', html)
  console.log('Build complete → dist/')
} else {
  console.error('Build failed:', result.logs)
  process.exit(1)
}
