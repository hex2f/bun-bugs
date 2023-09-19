await Bun.build({
	entrypoints: ['src/a.ts', 'src/greet.ts'],
	target: "browser",
	sourcemap: "none",
	root: '.',
	splitting: true,
	publicPath: './',
	format: "esm",
	outdir: 'out',
	plugins: [],
})

console.log('a')