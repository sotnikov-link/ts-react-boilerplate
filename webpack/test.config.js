var path = require('path');
var project = require('../project.config');
var baseConfig = require('./base.config');


module.exports = Object.assign({}, baseConfig, {
  entry: undefined,
  output: undefined,
  devtool: 'inline-source-map'
});
