const path = require( 'path' )

require('esbuild').build({
  entryPoints: ['./src/app.jsx'],
  bundle: true,
  sourcemap: true,
  minify: true,
  splitting: true,
  format: 'esm',
  target: ['esnext'],
  outdir: 'es-build-dir',
  plugins: [
    require('esbuild-postcss')(),
    require('esbuild-plugin-alias-path').esbuildPluginAliasPath({
      alias: { 'src/*': path.resolve( __dirname, './src' ) }
    })
  ]
}).catch(() => process.exit(1))