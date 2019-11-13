module.exports = function(config) {
  config.set({
    mutator: "javascript",
    mutate: [
      // [FUTURE TBD] this seems to take about 100 hours on a 40-CPU server in the cloud:
      // "src/**/*.js"
      // [TBD] mutation testing limited to src/common for now:
      // "src/cli/*.js"
      // ... , ...
      "src/common/*.js"
      // ... , ...
      // "src/language-js/*.js"
      // ... , ...
      // "src/utils/*.js"
    ],
    packageManager: "yarn",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "command",
    // TBD ???:
    timeoutMS: 15*60*1000,
    transpilers: [],
    coverageAnalysis: "off"
  });
};
