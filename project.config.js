var path = require('path');


module.exports = project = {
  root: path.resolve(__dirname),
  devServer: {
    // see https://www.wiki.com/en/Uniform_Resource_Identifier
    schema: 'http',
    // Use value ↓ '0.0.0.0' for run server on all interfaces
    host: 'localhost',
    port: 8080,
    getUrl: () => [
      project.devServer.schema, '://',
      (
        project.devServer.host !== '0.0.0.0' // for Windows
          ? project.devServer.host
          : 'localhost'
      ) , ':', project.devServer.port
    ].join('')
  }
};
