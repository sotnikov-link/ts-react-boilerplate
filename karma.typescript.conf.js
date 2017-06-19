module.exports = function(config) {
  config.set({

    frameworks: ['jasmine', 'karma-typescript'],

    files: [ {pattern: 'src/**/*.tsx'} ],

    preprocessors: { 'src/**/*.tsx': ['karma-typescript'] },

    karmaTypescriptConfig: {
      bundlerOptions: {
        entrypoints: /\.spec\.tsx$/
        // transforms: [
        //     require('karma-typescript-es6-transform')()
        // ]
      },
      compilerOptions: {
        jsx: 'react',
        module: 'commonjs',
        sourceMap: true,
        target: 'ES5',
        lib: ['DOM', 'ES2015']
      },
      include: ['src/**/*.tsx'],
      reports:
      {
        lcovonly: { directory: './', subdirectory: 'coverage' },
        html: { directory: './', subdirectory: 'coverage'},
        'text-summary': ''
      }
    },

    reporters: ['progress', 'karma-typescript'],

    browsers: ['Chrome']
  });
};
