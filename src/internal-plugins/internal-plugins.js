"use strict";

const js = require("../language-js");
const css = require("../language-css");
const handlebars = require("../language-handlebars");
const graphql = require("../language-graphql");
const markdown = require("../language-markdown");
const html = require("../language-html");
const yaml = require("../language-yaml");

// We need to use `eval("require")()` to prevent rollup from hoisting the requires. A babel
// plugin will look for `eval("require")()` and transform to `require()` in the bundle,
// and rewrite the paths to require from the top-level.

// We need to list the parsers and getters so we can load them only when necessary.
module.exports = [
  // JS
  js,
  {
    parsers: {
      // JS - Babel
      get babel() {
        return eval("require")("./parser-babylon").parsers.babel;
      },
      get "babel-flow"() {
        return eval("require")("./parser-babylon").parsers["babel-flow"];
      },
      get "babel-ts"() {
        return eval("require")("./parser-babylon").parsers["babel-ts"];
      },
      get babylon() {
        return eval("require")("./parser-babylon").parsers.babel;
      },
      get json() {
        return eval("require")("./parser-babylon").parsers.json;
      },
      get json5() {
        return eval("require")("./parser-babylon").parsers.json5;
      },
      get "json-stringify"() {
        return eval("require")("./parser-babylon").parsers["json-stringify"];
      },
      get __js_expression() {
        return eval("require")("./parser-babylon").parsers.__js_expression;
      },
      get __vue_expression() {
        return eval("require")("./parser-babylon").parsers.__vue_expression;
      },
      get __vue_event_binding() {
        return eval("require")("./parser-babylon").parsers.__vue_event_binding;
      },
      // JS - Flow
      get flow() {
        return eval("require")("../language-js/parser-flow").parsers.flow;
      },
      // JS - TypeScript
      get typescript() {
        return eval("require")("../language-js/parser-typescript").parsers
          .typescript;
      },
      // JS - Angular Action
      get __ng_action() {
        return eval("require")("../language-js/parser-angular").parsers
          .__ng_action;
      },
      // JS - Angular Binding
      get __ng_binding() {
        return eval("require")("../language-js/parser-angular").parsers
          .__ng_binding;
      },
      // JS - Angular Interpolation
      get __ng_interpolation() {
        return eval("require")("../language-js/parser-angular").parsers
          .__ng_interpolation;
      },
      // JS - Angular Directive
      get __ng_directive() {
        return eval("require")("../language-js/parser-angular").parsers
          .__ng_directive;
      }
    }
  },

  // CSS
  css,
  {
    parsers: {
      // TODO: switch these to just `postcss` and use `language` instead.
      get css() {
        return eval("require")("../language-css/parser-postcss").parsers.css;
      },
      get less() {
        return eval("require")("../language-css/parser-postcss").parsers.css;
      },
      get scss() {
        return eval("require")("../language-css/parser-postcss").parsers.css;
      }
    }
  },

  // Handlebars
  handlebars,
  {
    parsers: {
      get glimmer() {
        return eval("require")("../language-handlebars/parser-glimmer").parsers
          .glimmer;
      }
    }
  },

  // GraphQL
  graphql,
  {
    parsers: {
      get graphql() {
        return eval("require")("../language-graphql/parser-graphql").parsers
          .graphql;
      }
    }
  },

  // Markdown
  markdown,
  {
    parsers: {
      get remark() {
        return eval("require")("../language-markdown/parser-markdown").parsers
          .remark;
      },
      get markdown() {
        return eval("require")("../language-markdown/parser-markdown").parsers
          .remark;
      },
      get mdx() {
        return eval("require")("../language-markdown/parser-markdown").parsers
          .mdx;
      }
    }
  },

  html,
  {
    parsers: {
      // HTML
      get html() {
        return eval("require")("../language-html/parser-html").parsers.html;
      },
      // Vue
      get vue() {
        return eval("require")("../language-html/parser-html").parsers.vue;
      },
      // Angular
      get angular() {
        return eval("require")("../language-html/parser-html").parsers.angular;
      },
      // Lightning Web Components
      get lwc() {
        return eval("require")("../language-html/parser-html").parsers.lwc;
      }
    }
  },

  // YAML
  yaml,
  {
    parsers: {
      get yaml() {
        return eval("require")("../language-yaml/parser-yaml").parsers.yaml;
      }
    }
  }
];
