// stryker.conf.js
module.exports = function(config){
  config.set({
    files: [
        // Add your files here, this is just an example:
        { pattern: 'src/**/*.js', mutated: true, included: false},
        'test/**/*.js'
    ],
    testRunner: 'mocha',
    testFramework: 'mocha',
    testSelector: null,
    reporter: ['clear-text', 'progress'],
    plugins: ['stryker-mocha-runner']
  });
}
