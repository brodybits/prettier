"use strict";

const printer = require("./printer-postcss");
const options = require("./options");
const createLanguage = require("../utils/create-language");

const languages = [
  // @ts-ignore
  createLanguage(require("linguist-languages/data/CSS"), {
    override: {
      since: "1.4.0",
      parsers: ["css"],
      vscodeLanguageIds: ["css"]
    }
  }),
  // @ts-ignore
  createLanguage(require("linguist-languages/data/PostCSS"), {
    override: {
      since: "1.4.0",
      parsers: ["css"],
      vscodeLanguageIds: ["postcss"]
    },
    extend: {
      extensions: [".postcss"]
    }
  }),
  // @ts-ignore
  createLanguage(require("linguist-languages/data/Less"), {
    override: {
      since: "1.4.0",
      parsers: ["less"],
      vscodeLanguageIds: ["less"]
    }
  }),
  // @ts-ignore
  createLanguage(require("linguist-languages/data/SCSS"), {
    override: {
      since: "1.4.0",
      parsers: ["scss"],
      vscodeLanguageIds: ["scss"]
    }
  })
];

const printers = {
  postcss: printer
};

module.exports = {
  languages,
  options,
  printers
};
