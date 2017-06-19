// require all 'src/**/*.spec.tsx?'
const testContext = require.context('./src/', true, /\.spec\.tsx?$/);
testContext.keys().forEach(testContext);
