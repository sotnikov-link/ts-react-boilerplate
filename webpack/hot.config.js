var project = require('../project.config');
var webpack = require('webpack');
var path = require('path');
// TODO ↓
// var baseConfig = require('./base.config');

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

      './src/index'
    ]
  },
  module: {
    loaders: [
      // [3] https://git.io/vHMJO (Glavin001/react-hot-ts)
      {
        test: /\.tsx?$/,
        loaders: [
          "react-hot-loader/webpack",
          "awesome-typescript-loader"
        ],
        exclude: path.resolve(project.root, 'node_modules'),
        include: path.resolve(project.root, "src"),
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
    ]
  },
  plugins: [
    // [1] enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // [1] prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),

    // [1] do not emit compiled assets that include errors
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    // [2] http://www.typescriptlang.org/docs/handbook/react-&-webpack.html
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  output: {
    path: path.resolve(project.root, 'dist'),
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
