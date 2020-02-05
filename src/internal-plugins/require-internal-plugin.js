"use strict";

// Using `eval("require")` to stop Rollup from `require` processing for the
// dynamically imported plugin modules.

// The transform-custom-require Babel plugin serves to transform
// `eval("require")` to `require` during a release build.

// NOTE that this module must be in the same directory as `internal-plugins.js`
// for the dynamic require of the internal plugins to work correctly.

module.exports = eval("require");
