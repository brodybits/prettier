"use strict";

module.exports = function(config) {
  config.set({
    mutator: "javascript",
    mutate: [
      "src/cli/**/*.js",
      "src/common/**/*.js",
      "src/config/**/*.js",
      "src/doc/**/*.js",
      "src/language-css/**/*.js",
      "src/language-graphql/**/*.js",
      "src/language-handlebars/**/*.js",
      "src/language-html/**/*.js",
      "src/language-js/**/*.js",
      "src/language-markdown/**/*.js",
      "src/language-yaml/**/*.js",
      "src/main/**/*.js",
      "src/utils/**/*.js"
    ],
    packageManager: "yarn",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "command",
    commandRunner: {
      command: "npx jest --no-cache"
    },
    timeoutMS: 120000,
    transpilers: [],
    coverageAnalysis: "off"
  });
};
