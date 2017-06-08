var path = require('path');

module.exports = project = {
  root: path.resolve(__dirname),
  devServer: {
    // see https://www.wiki.com/en/Uniform_Resource_Identifier
    schema: 'http',
    host: '0.0.0.0',
    port: 8080,
    getUrl: () => [
      project.devServer.schema, '://',
      project.devServer.host, ':', project.devServer.port
    ].join('')
  }
}
