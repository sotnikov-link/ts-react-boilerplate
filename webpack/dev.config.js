var baseConfig = require('./base.config');
var project = require('../project.config');
var path = require('path');

console.log(395, path.resolve(project.ROOT, 'static'));

module.exports = Object.assign({
  devtool: 'eval',
  devServer: {
    open: true,
    contentBase: path.resolve(project.ROOT, 'static'),
    port: project.DEV_SERVER_PORT
  }
}, baseConfig);
