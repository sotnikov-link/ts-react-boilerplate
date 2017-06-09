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
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ["awesome-typescript-loader"],
        exclude: path.resolve(project.root, 'node_modules'),
        include: path.resolve(project.root, "src"),
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
    ]
  },
};
