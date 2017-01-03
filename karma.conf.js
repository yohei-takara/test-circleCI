// Karma configuration
// Generated on Thu Dec 22 2016 00:16:58 GMT+0900 (JST)

module.exports = function(config) {

  var reportDir = process.env['CIRCLE_TEST_REPORTS'] || '.';

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      "node_modules/angular/angular.js",
      "node_modules/angular-mocks/angular-mocks.js",
      "src/script/js/*.js",
      "spec/*.js"
    ],
    exclude: [],
    preprocessors: {
      'src/script/js/*.js': ['coverage']
    },
    coverageReporter: {
      dir: reportDir + '/coverage/',
      reporters: [
        {
          type: 'html'
        }
      ]
    },
    reporters: ['spec', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
