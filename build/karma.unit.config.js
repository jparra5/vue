var base = require('./karma.base.config.js')

module.exports = function (config) {
  config.set(Object.assign(base, {
    browsers: ['PhantomJS'],
    reporters: ['progress', 'junit'],
    singleRun: true,
    junitReporter: {
      // outputDir is set as below to accumulate test outputs in root directory for accessing easily.
      outputDir: process.cwd(), // results will be saved as $outputDir/$browserName.xml
      outputFile: "../mochaResults.xml" // if included, results will be saved as $outputDir/$browserName/$outputFile
      // suite: '', // suite will become the package name attribute in xml testsuite element
      // useBrowserName: true, // add browser name to report and classes names
      // nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      // classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
      // properties: {} // key value pair of properties to add to the <properties> section of the report
    },
    plugins: base.plugins.concat([
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-safari-launcher',
      'karma-junit-reporter',
      'karma-phantomjs-launcher'
    ])
  }))
}
