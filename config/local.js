const SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  directConnect: true,

  specs: ['../spec/progression/*.spec.js'],
  exclude: [],
  suites: {
    bvt: ['../spec/bvt/*.spec.js'],
    progression: ['../spec/progression/*.spec.js'],
    regression: ['../spec/regression/*.spec.js'],
  },

  capabilities: {
    browserName: 'chrome',
    count: 1,
    maxInstances: 1,
  },

  maxSessions: -1,

  rootElement: 'body',
  allScriptTimeout: 11000,
  getPageTimeout: 10000,

  onPrepare: () => {
    jasmine.getEnv().addReporter(new SpecReporter());
    //for non angular web-apps
    browser.ignoreSynchronization = true;
  },
  
  params: {
    locale: 'en',
  },

  framework: 'jasmine2',
  jasmineNodeOpts: {
    showcolors: true,
    defaultTimeoutInterval: 30000,
  },
};