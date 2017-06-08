var project = require('../project.config');
var path = require('path');

module.exports = {
  context: path.resolve(project.root, 'src'),
  entry: { index: ['babel-polyfill', './index.jsx'] },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(project.root, 'dist')
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
