var project = require('../project.config');
var path = require('path');

module.exports = {
  context: path.resolve(project.root, 'src'),
  entry: { index: ['./'] },
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
        exclude: /node_modules/
      },
      {
        // source-map-loader will extract from any JavaScript file,
        // including those in the node_modules directory.
        // Be mindful in setting include and exclude rule conditions
        // to maximize bundling performance.
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  }
};
