"use strict";

// Using `eval("require")` to stop Rollup from `require` processing for the
// dynamically imported plugin modules.

// NOTE that this module must be in the same directory as `internal-plugins.js`
// for the dynamic require of the internal plugins to work correctly.

module.exports = eval("require");
