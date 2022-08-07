const {merge} = require('webpack-merge');
const baseWebpackConfig = require('./webpack.conf')
const webpack = require('webpack')

let config = merge(baseWebpackConfig, {
  plugins: [
    new webpack.DefinePlugin({
      Gloomy_env: JSON.stringify('release'),
      Map_Key: JSON.stringify('')
    })
  ]
})

module.exports = config;
