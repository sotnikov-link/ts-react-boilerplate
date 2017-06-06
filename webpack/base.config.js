var path = require('path');
var project = require('../project.config');

module.exports = {
  context: path.resolve(project.ROOT, 'src'),
  entry: { index: './index.js' },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(project.ROOT, 'dist')
  }
};
