"use strict";

module.exports = {
  cosmiconfig: require("cosmiconfig"),
  findParentDir: require("find-parent-dir").sync,
  isCI: () => require("is-ci"),
  writeFileAtomic: require("write-file-atomic").sync
};
