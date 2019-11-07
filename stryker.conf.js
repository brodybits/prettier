"use strict";

module.exports = function(config) {
  config.set({
    mutator: "javascript",
    mutate: [
      "src/cli/**/*.js"
      // ...
    ],
    packageManager: "yarn",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "jest",
    transpilers: [],
    coverageAnalysis: "off"
  });
};
