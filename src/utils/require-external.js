"use strict";

// Using `eval("require")` to stop Rollup from `require` processing for the
// dynamically imported plugin modules.

// The transform-custom-require Babel plugin serves to transform
// `eval("require")` to `require` during a release build.

module.exports = eval("require");
