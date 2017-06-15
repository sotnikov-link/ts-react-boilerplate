var path = require('path');
var project = require('../project.config');
var baseConfig = require('./base.config');
var webpack = require('webpack');


module.exports = Object.assign({}, baseConfig, {
  entry: undefined,
  output: undefined,
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: path.resolve(project.root, 'node_modules'),
        include: path.resolve(project.root, 'src')
      },
      {
        test: /.tsx?$/,
        use: ['sourcemap-istanbul-instrumenter-loader?force-sourcemap=true'],
        exclude: /(node_modules|\.spec\.tsx?$)/,
        include: path.resolve(project.root, 'src'),
        enforce: 'post'
      }
    ]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: null,
      test: /\.(tsx|js)($|\?)/i
    })
  ]
});
