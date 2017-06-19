var project = require('../project.config');
var webpack = require('webpack');
var path = require('path');
var baseConfig = require('./base.config');
var rules = require('./rules');
// var atomicParts = require('./atomicParts'); // atomic parts of webpack config


module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    index: [
      // [1] https://git.io/vH6tq (gaearon/react-hot-boilerplate)
      // [1] activate HMR for React
      'react-hot-loader/patch',

      // [1] bundle the client for webpack-dev-server
      // [1] and connect to the provided endpoint
      'webpack-dev-server/client?' + project.devServer.getUrl(),

      // [1] bundle the client for hot reloading
      // [1] only- means to only hot reload for successful updates
      'webpack/hot/only-dev-server',

      baseConfig.entry.index
    ]
  },

  output: baseConfig.output,

  module: {
    rules: [
      rules.reactHotLoader,
      rules.sourceMapLoader
    ]
  },

  plugins: [
    // [1] enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // [1] prints more readable module names
    // [1] in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),

    // [1] do not emit compiled assets that include errors
    new webpack.NoEmitOnErrorsPlugin()
  ],

  resolve: baseConfig.resolve,

  devServer: {
    host: project.devServer.host,
    port: project.devServer.port,
    contentBase: path.resolve(project.root, 'static'),
    open: true,
    disableHostCheck: true,

    // [1] respond to 404s with index.html
    historyApiFallback: true,

    // [1] enable HMR on the server
    hot: true
  }
};
