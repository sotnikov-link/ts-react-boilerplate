var baseConfig = require('./base.config');
var project = require('../project.config');
var path = require('path');

module.exports = Object.assign({}, baseConfig, {
  devtool: 'eval',
  devServer: {
    open: true,
    contentBase: path.resolve(project.ROOT, 'static'),
    port: project.DEV_SERVER_PORT
  }
});
