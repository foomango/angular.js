'use strict';

var angularFiles = require('./angularFiles');
var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  sharedConfig(config, {testName: 'AngularJS: debug', logFile: 'karma-debug.log'});

  config.set({
    files: angularFiles.mergeFilesFor('debug'),
    exclude: angularFiles.mergeFilesFor('debugExclude'),

    junitReporter: {
      outputFile: 'test_out/debug.xml',
      suite: 'debug'
    }
  });
};
