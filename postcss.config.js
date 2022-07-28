module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('postcss-use'),
    require('postcss-autoreset'),
    require('postcss-initial'),
    require('postcss-preset-env'),
    require('postcss-utilities')({
      centerMethod: 'flexbox'
    }),
    require('postcss-short'),
    require('postcss-assets')
  ]
};
