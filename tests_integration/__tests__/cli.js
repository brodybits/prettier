"use strict";
const fs = require("fs");
const { prettierCli } = require("../env");

xdescribe("CLI", () => {
  test("CLI should be executable.", () => {
    expect(() => fs.accessSync(prettierCli, fs.constants.X_OK)).not.toThrow();
  });
});
