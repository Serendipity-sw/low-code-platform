const {merge} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.conf')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

let config = merge(baseWebpackConfig, {
    module: {
        rules: [
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
                                localIdentName: '[hash]'
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
    performance: {
        hints: false,
    },
    optimization: {
        usedExports: true,
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new ParallelUglifyPlugin({
                cacheDir: '.cache/',
                test: /.js$/,
                workerCount: 2,
                uglifyJS: {
                    output: {
                        beautify: false,
                        comments: false
                    },
                    compress: {
                        drop_console: true,
                        collapse_vars: true,
                        reduce_vars: true
                    }
                }
            })
        ]
    },
    plugins: [
        new DashboardPlugin(),
        new CompressionWebpackPlugin({
            algorithm: 'gzip'
        }),
        new webpack.DefinePlugin({
            Gloomy_env: JSON.stringify('release'),
            Enable_Mock: JSON.stringify(false),
            Map_Key: JSON.stringify('b6f3a086b83159ee8f080b361d1384d2')
        })
    ]
})

module.exports = config
