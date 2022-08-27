const { merge } = require( 'webpack-merge' )
const baseWebpackConfig = require( './webpack.conf' )
const webpack = require( 'webpack' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )

let config = merge( baseWebpackConfig, {
  // devtool: 'eval-cheap-module-source-map',
  module:{
    rules:[
      {
        test: /\.(css|pcss)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[path]__[name]__[local]'
              },
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin( {
      Gloomy_env: JSON.stringify( 'development' ),
      Enable_Mock: JSON.stringify( true ),
      Map_Key: JSON.stringify( 'b6f3a086b83159ee8f080b361d1384d2' )
    } )
  ]
} )

module.exports = config
