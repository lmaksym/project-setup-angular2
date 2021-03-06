var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 110000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': require('phantomjs-prebuilt').path
    
  },
  baseUrl: 'http://localhost:3030/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    defaultTimeoutInterval: 400000,
    isVerbose: false,
    includeStackTrace: false,
    print: function() {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
  },
  configDir:'./src'
};
