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
    testRunner: "command",
    commandRunner: {
      command: "npx jest --no-cache tests/ tests_integration"
    },
    transpilers: [],
    coverageAnalysis: "off"
  });
};
