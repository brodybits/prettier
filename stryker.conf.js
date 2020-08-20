/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutator: "javascript",
  packageManager: "yarn",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "command",
  transpilers: [],
  coverageAnalysis: "all",
};
