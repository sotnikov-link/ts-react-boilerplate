// This is file for module.rules of webpack config.

module.exports = {
  // base loader
  awesomeTypeScriptLoader: {
    test: /\.tsx$/,
    use: ['awesome-typescript-loader'],
    exclude: /node_modules/
  },

  // base loader
  sourceMapLoader: {
    // source-map-loader will extract from any JavaScript file,
    // including those in the node_modules directory.
    // Be mindful in setting include and exclude rule conditions
    // to maximize bundling performance.
    enforce: 'pre',
    test: /\.js$/,
    loader: 'source-map-loader'
  },

  // for hot-reload
  reactHotLoader: {
    // https://git.io/vHMJO (Glavin001/react-hot-ts)
    test: /\.tsx$/,
    use: [
      'react-hot-loader/webpack',
      'awesome-typescript-loader'
    ],
    exclude: /node_modules/
  },

  // for karma tests
  sourcemapIstanbulInstrumenterLoader: {
    // https://git.io/vHNuc (marcules/karma-remap-istanbul)
    test: /src(\/|\\).+\.tsx$/,
    // exclude *.spec.tsx files ↓ from reports for coverage
    exclude: /(node_modules|\.spec\.tsx$)/,
    loader: 'sourcemap-istanbul-instrumenter-loader?force-sourcemap=true',
    enforce: 'post'
  }
};
