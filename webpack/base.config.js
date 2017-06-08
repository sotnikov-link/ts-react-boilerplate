var path = require('path');
var project = require('../project.config');

module.exports = {
  context: path.resolve(project.ROOT, 'src'),
  entry: { index: ['babel-polyfill', './index.jsx'] },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(project.ROOT, 'dist')
  },
  resolve: { extensions: ['.js', '.json', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: { loader: 'babel-loader' }
      }
    ]
  }
};
