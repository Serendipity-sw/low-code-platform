const { merge } = require( 'webpack-merge' )
const baseWebpackConfig = require( './webpack.conf' )
const webpack = require( 'webpack' )

let config = merge( baseWebpackConfig, {
  // devtool: 'eval-cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin( {
      Gloomy_env: JSON.stringify( 'development' ),
      Enable_Mock: JSON.stringify( true ),
      Map_Key: JSON.stringify( 'b6f3a086b83159ee8f080b361d1384d2' )
    } )
  ]
} )

module.exports = config
