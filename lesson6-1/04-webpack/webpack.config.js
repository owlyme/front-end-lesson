const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports ={
  mode: 'none',
  entry : {
    index: './src/index.js',
    about: './src/about.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10, // 分包体积 看效果
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: 'src/about.html',
      filename: 'about.html',
      chunks: ['about']
    })
  ]
}