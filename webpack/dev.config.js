var project = require('../project.config');
var baseConfig = require('./base.config');
var path = require('path');

module.exports = Object.assign({}, baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    open: true,
    contentBase: path.resolve(project.root, 'static'),
    port: project.devServer.port
  }
});
