const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'eval',
  entry: {
    index: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  resolve: { extensions: ['.js', '.json', '.jsx'] },
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
