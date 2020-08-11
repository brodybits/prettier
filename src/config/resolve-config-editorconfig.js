"use strict";

const path = require("path");

const editorconfig = require("editorconfig");
const mem = require("mem");
const editorConfigToPrettier = require("editorconfig-to-prettier");
const findProjectRoot = require("./find-project-root");

/** @type{(fn: Function) => Function} */
const jsonStringifyMem = (fn) => mem(fn, { cacheKey: JSON.stringify });

/**
 * @param {string} filePath
 * @param {Function} parse
 */
const maybeParse = (filePath, parse) =>
  filePath &&
  parse(filePath, {
    root: findProjectRoot(path.dirname(path.resolve(filePath))),
  });

const editorconfigAsyncNoCache =
  /** @param {string} filePath */
  async (filePath) =>
    editorConfigToPrettier(await maybeParse(filePath, editorconfig.parse));

const editorconfigAsyncWithCache = jsonStringifyMem(editorconfigAsyncNoCache);

const editorconfigSyncNoCache =
  /** @param {string} filePath */
  (filePath) =>
    editorConfigToPrettier(maybeParse(filePath, editorconfig.parseSync));

const editorconfigSyncWithCache = jsonStringifyMem(editorconfigSyncNoCache);

/** @param {{cache: boolean, editorconfig: boolean, sync: boolean}} opts */
function getLoadFunction(opts) {
  if (!opts.editorconfig) {
    return () => null;
  }

  if (opts.sync) {
    return opts.cache ? editorconfigSyncWithCache : editorconfigSyncNoCache;
  }

  return opts.cache ? editorconfigAsyncWithCache : editorconfigAsyncNoCache;
}

function clearCache() {
  mem.clear(editorconfigSyncWithCache);
  mem.clear(editorconfigAsyncWithCache);
}

module.exports = {
  getLoadFunction,
  clearCache,
};
