module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "yarn",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "command",
    // TBD ???:
    timeoutMS: 15*60*1000,
    transpilers: [],
    coverageAnalysis: "off"
  });
};
