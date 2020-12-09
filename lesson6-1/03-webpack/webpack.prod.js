const path = require('path')
const common = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const webpack = require('webpack')
module.exports = merge(
  common,
  {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {from:'public'}
      ]
    }),
    new webpack.DefinePlugin({
      API_BASE: '"api-base-url"'
    })
  ]
})
