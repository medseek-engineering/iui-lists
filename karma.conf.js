module.exports = function (config) {
  'use strict';
  config.set({
    basePath: '',

    port: 9267,

    runnerPort: 9100,

    colors: true,

    autoWatch: true,

    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS'],

    captureTimeout: 60000,

    browserDisconnectTolerance: 0,

    browserNoActivityTimeout: 60000,

    singleRun: true,

    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-ng-html2js-preprocessor',
      'karma-spec-reporter'
    ],

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    htmlReporter: {
      outputDir: 'karma_html',
      templatePath: __dirname + '/node_modules/karma-html-reporter/jasmine_template.html'
    },

    files: [
      // app core dependencies
      'node_modules/jquery/dist/jquery.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/lodash/dist/lodash.min.js',

      // app module dependencies
      'lib/src/**/*.js',
      'lib/src/*.js',

      //directive templates
      'lib/src/**/*.html',
      'lib/src/**/*.svg',
      // test scripts
      'test/**/*.test.js'
    ],

    reporters: ['coverage', 'progress', 'html', 'spec'],

    preprocessors: {
      'lib/src/**/*.html': ['ng-html2js'],
      'lib/src/**/*.svg': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      // immitates ui-core
      prependPrefix: '/$iui-lists',
      stripPrefix: 'lib/src',
      moduleName: 'templates'
    },

    frameworks: ['jasmine']
  });
};