const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge');

module.exports = merge(
  common,
  {
    mode: 'development',
    devServer: {
      // hot: true,
      hotOnly: true,
      open: true,
      contentBase: path.join(__dirname, "dist"), // 静态资源路径
    },
})