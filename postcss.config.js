module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('precss'),
    require('postcss-use'),
    require('postcss-autoreset')({
      reset: {
      },
    }),
    require('postcss-initial'),
    require('postcss-preset-env'),
    require('postcss-utilities')({
      centerMethod: 'flexbox'
    }),
    require('postcss-short'),
    require('postcss-assets')
  ]
};
