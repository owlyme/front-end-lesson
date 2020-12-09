const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {HotModuleReplacementPlugin} = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundles.js',
    path: path.join(__dirname, 'dist'),
    // publicPath: 'dist/' // 一定要有尾斜杠 cdn 路径
  },
  devServer: {
    // hot: true,
    hotOnly: true,
    // open: true,
    contentBase: path.join(__dirname, "dist"), // 静态资源路径
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.md$/,
        use: ['html-loader','./md-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.png$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new HotModuleReplacementPlugin()
  ]
}