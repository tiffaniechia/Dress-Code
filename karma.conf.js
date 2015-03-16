module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine','chai', 'sinon-chai'],

    files: [
      'public/vendor/angular/angular.js',
      'public/vendor/angular-resource/angular-resource.js',
      'public/vendor/angular-mocks/angular-mocks.js',
      'public/vendor/underscore/underscore.js',
      'test/*.js',
      'public/app/**/*.js',
      'test/**/*.test.js'
    ],

    exclude: [
      'public/app/app.js'
    ],

    preprocessors: {
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false,

    plugins: ['karma-phantomjs-launcher','karma-jasmine','karma-chai-plugins']
  });
};
