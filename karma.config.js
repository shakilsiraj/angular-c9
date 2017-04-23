// Karma configuration
// Generated on Tue Mar 28 2017 06:53:56 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'karma-typescript'],


    // list of files / patterns to load in the browser
    files: [
      {
        pattern: "spec/support/testbed.setup.ts"
      },
      {
        pattern: "source/**/*.+(ts|html|css)"
      },
      {
        pattern: "spec/unit/**/*.+(ts|html|css)"
      }
    ],

    // list of files to exclude
    exclude: [
      "source/main.browser.ts" //don't bootstrap another application module with Karma
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },

    karmaTypescriptConfig: {
      bundlerOptions: {
        transforms: [require("karma-typescript-es6-transform")()]
      },
      tsconfig: "tsconfig.karma.json",
      coverageOptions: {
        instrumentation: false // set to false to see the original Typescript code when debugging
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // reporters: ['progress'],
    reporters: ['spec', 'kjhtml', 'karma-typescript'],
    specReporter: {
      maxLogLines: 5, // limit number of lines logged per test 
      suppressErrorSummary: false, // do not print error summary 
      suppressFailed: false, // do not print information about failed tests 
      suppressPassed: false, // do not print information about passed tests 
      suppressSkipped: false, // do not print information about skipped tests 
      showSpecTiming: true // print the time elapsed for each spec 
    },


    // web server port
    port: process.env.PORT,

    //web server 
    hostname: process.env.IP,


    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: [],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    //Enabling this setting will cancel the current run and start a new run immediately when a change is detected.
    restartOnFileChange: true
  })
}
