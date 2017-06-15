var path = require('path');
var project = require('../project.config');
var baseConfig = require('./base.config');
var webpack = require('webpack');


module.exports = {
  module: {
    rules: [{
      test: /\.tsx$/,
      loader: 'awesome-typescript-loader',
      exclude: /node_modules/
    }, {
      test: /src\/.+\.tsx$/,
      exclude: /(node_modules|\.spec\.tsx$)/,
      loader: 'sourcemap-istanbul-instrumenter-loader?force-sourcemap=true',
      enforce: 'post'
    }]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: null,
      test: /\.(tsx|js)($|\?)/i
    })
  ],
  resolve: {
    extensions: ['.tsx', '.js']
  }
};
