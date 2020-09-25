"use strict";

/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutator: "javascript",
  mutate: [
    "index.js",
    "src/**/*.js",
    // not working with Stryker 4.0.0-beta.8:
    "!src/language-js/index.js",
    "!src/language-js/needs-parens.js",
    "!src/language-js/printer-estree.js",
  ],
  packageManager: "yarn",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "command",
  transpilers: [],
  coverageAnalysis: "off",
};
