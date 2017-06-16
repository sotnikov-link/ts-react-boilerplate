var baseConfig = require('./base.config');
var hotConfig = require('./hot.config');


module.exports = {
  entry: baseConfig.entry,
  output: baseConfig.output,
  resolve: baseConfig.resolve,
  module: baseConfig.module,
  devtool: hotConfig.devtool,
  devServer: Object.assign({}, hotConfig.devServer, {
    hot: false
  })
};
