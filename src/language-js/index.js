"use strict";

const estreePrinter = require("./printer-estree");
const estreeJsonPrinter = require("./printer-estree-json");
const options = require("./options");
const createLanguage = require("../utils/create-language");

const languages = [
  // @ts-ignore
  createLanguage(require("linguist-languages/data/JavaScript"), {
    override: {
      since: "0.0.0",
      parsers: ["babel", "flow"],
      vscodeLanguageIds: ["javascript"]
    },
    extend: {
      interpreters: ["nodejs"]
    }
  }),
  // @ts-ignore
  createLanguage(require("linguist-languages/data/JavaScript"), {
    override: {
      name: "Flow",
      since: "0.0.0",
      parsers: ["babel", "flow"],
      vscodeLanguageIds: ["javascript"],
      aliases: [],
      filenames: [],
      extensions: [".js.flow"]
    }
  }),
  // @ts-ignore
  createLanguage(require("linguist-languages/data/JSX"), {
    override: {
      since: "0.0.0",
      parsers: ["babel", "flow"],
      vscodeLanguageIds: ["javascriptreact"]
    }
  }),
  // @ts-ignore
  createLanguage(require("linguist-languages/data/TypeScript"), {
    override: {
      since: "1.4.0",
      parsers: ["typescript"],
      vscodeLanguageIds: ["typescript"]
    }
  }),
  // @ts-ignore
  createLanguage(require("linguist-languages/data/TSX"), {
    override: {
      since: "1.4.0",
      parsers: ["typescript"],
      vscodeLanguageIds: ["typescriptreact"]
    }
  }),
  // @ts-ignore
  createLanguage(require("linguist-languages/data/JSON"), {
    override: {
      name: "JSON.stringify",
      since: "1.13.0",
      parsers: ["json-stringify"],
      vscodeLanguageIds: ["json"],
      extensions: [], // .json file defaults to json instead of json-stringify
      filenames: ["package.json", "package-lock.json", "composer.json"]
    }
  }),
  // @ts-ignore
  createLanguage(require("linguist-languages/data/JSON"), {
    override: {
      since: "1.5.0",
      parsers: ["json"],
      vscodeLanguageIds: ["json"]
    },
    extend: {
      filenames: [".prettierrc"]
    }
  }),
  // @ts-ignore
  createLanguage(require("linguist-languages/data/JSON with Comments"), {
    override: {
      since: "1.5.0",
      parsers: ["json"],
      vscodeLanguageIds: ["jsonc"]
    },
    extend: {
      filenames: [".eslintrc"]
    }
  }),
  // @ts-ignore
  createLanguage(require("linguist-languages/data/JSON5"), {
    override: {
      since: "1.13.0",
      parsers: ["json5"],
      vscodeLanguageIds: ["json5"]
    }
  })
];

const printers = {
  estree: estreePrinter,
  "estree-json": estreeJsonPrinter
};

module.exports = {
  languages,
  options,
  printers
};
