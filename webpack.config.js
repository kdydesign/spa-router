const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

module.exports = {
  entry: {
    app: [
      './router.js',
    ]
  },

  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html'
    })
  ],

  module: {
    rules: [
      { test: /\.hbs$/, loader: "handlebars-loader" }
    ]
  }
}
