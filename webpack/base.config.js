var project = require('../project.config');
var path = require('path');

module.exports = {
  context: path.resolve(project.root, 'src'),
  entry: { index: ['./index.tsx'] },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(project.root, 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: ['awesome-typescript-loader'],
        exclude: path.resolve(project.root, 'node_modules'),
        include: path.resolve(project.root, 'src')
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  }
};
