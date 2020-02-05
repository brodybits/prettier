"use strict";

// Using `eval("require")` to stop Rollup from `require` processing for the
// dynamically imported plugin modules.

module.exports = eval("require");
