// This is file used as entry point for karma.conf.js.
// Extension of file should be ".js" becouse karma-sourcemap-loader
// supported only JS-file. Necessary to use "require" for TS-files.
const testContext = require.context('./', true, /\.spec\.(tsx)?$/);
testContext.keys().forEach(testContext);
