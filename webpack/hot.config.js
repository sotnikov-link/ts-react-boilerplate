const project = require('../project.config');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    index: [
      'babel-polyfill',

      // [1] https://git.io/vH6tq
      // [1] activate HMR for React
      'react-hot-loader/patch',

      // [1] bundle the client for webpack-dev-server
      // [1] and connect to the provided endpoint
      'webpack-dev-server/client?' + project.devServer.getUrl(),

      // [1] bundle the client for hot reloading
      // [1] only- means to only hot reload for successful updates
      'webpack/hot/only-dev-server',

      './src/index'
    ]
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // [1] enable HMR globally

    new webpack.NamedModulesPlugin(),
    // [1] prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // [1] do not emit compiled assets that include errors
  ],
  resolve: { extensions: ['.js', '.json', '.jsx'] },
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    host: project.devServer.host,
    port: project.devServer.port,
    contentBase: path.resolve(project.root, 'static'),
    open: true,

    // [1] respond to 404s with index.html
    historyApiFallback: true,

    // [1] enable HMR on the server
    hot: true,
  }
}
