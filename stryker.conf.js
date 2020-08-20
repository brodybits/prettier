/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutator: "javascript",
  mutate: ["index.js", "src/**/*.js"],
  packageManager: "yarn",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "command",
  transpilers: [],
  coverageAnalysis: "off",
};
