var path = require('path');
var project = require('../project.config');

module.exports = {
  context: path.resolve(project.ROOT, 'src'),
  entry: { index: ['babel-polyfill', './index.js'] },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(project.ROOT, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: { loader: 'babel-loader' }
      }
    ]
  }
};
