"use strict";

const js = require("../language-js");
const css = require("../language-css");
const handlebars = require("../language-handlebars");
const graphql = require("../language-graphql");
const markdown = require("../language-markdown");
const html = require("../language-html");
const yaml = require("../language-yaml");

// We need to use `eval("require")()` to prevent rollup from hoisting the requires. A babel
// plugin will look for `eval("require")()` and transform to `require()` in the bundle.

// We need to list the parsers and getters so we can load them only when necessary.
module.exports = [
  // from language-js:
  js,
  {
    parsers: {
      // JS - Babel
      get babel() {
        return eval("require")("./parser-babylon").parsers.babel;
      },
      get "babel-flow"() {
        return eval("require")("./parser-babylon").parsers[
          "babel-flow"
        ];
      },
      get "babel-ts"() {
        return eval("require")("./parser-babylon").parsers[
          "babel-ts"
        ];
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
        return eval("require")("./parser-babylon").parsers[
          "json-stringify"
        ];
      },
      get __js_expression() {
        return eval("require")("./parser-babylon").parsers
          .__js_expression;
      },
      get __vue_expression() {
        return eval("require")("./parser-babylon").parsers
          .__vue_expression;
      },
      get __vue_event_binding() {
        return eval("require")("./parser-babylon").parsers
          .__vue_event_binding;
      },
      // JS - Flow
      get flow() {
        return eval("require")("./parser-flow").parsers.flow;
      },
      // JS - TypeScript
      get typescript() {
        return eval("require")("./parser-typescript").parsers
          .typescript;
      },
      // JS - Angular Action
      get __ng_action() {
        return eval("require")("./parser-angular").parsers
          .__ng_action;
      },
      // JS - Angular Binding
      get __ng_binding() {
        return eval("require")("./parser-angular").parsers
          .__ng_binding;
      },
      // JS - Angular Interpolation
      get __ng_interpolation() {
        return eval("require")("./parser-angular").parsers
          .__ng_interpolation;
      },
      // JS - Angular Directive
      get __ng_directive() {
        return eval("require")("./parser-angular").parsers
          .__ng_directive;
      }
    }
  },

  // using parser-postcss:
  css,
  {
    parsers: {
      // TODO: switch these to just `postcss` and use `language` instead.
      get css() {
        return eval("require")("./parser-postcss").parsers.css;
      },
      get less() {
        return eval("require")("./parser-postcss").parsers.css;
      },
      get scss() {
        return eval("require")("./parser-postcss").parsers.css;
      }
    }
  },

  // Handlebars - using parser-glimmer:
  handlebars,
  {
    parsers: {
      get glimmer() {
        return eval("require")("./parser-glimmer").parsers
          .glimmer;
      }
    }
  },

  // GraphQL - using parser-graphql:
  graphql,
  {
    parsers: {
      get graphql() {
        return eval("require")("./parser-graphql").parsers
          .graphql;
      }
    }
  },

  // using parser-markdown:
  markdown,
  {
    parsers: {
      get remark() {
        return eval("require")("./parser-markdown").parsers
          .remark;
      },
      get markdown() {
        return eval("require")("./parser-markdown").parsers
          .remark;
      },
      get mdx() {
        return eval("require")("./parser-markdown").parsers
          .mdx;
      }
    }
  },

  // using parser-html:
  html,
  {
    parsers: {
      // HTML
      get html() {
        return eval("require")("./parser-html").parsers.html;
      },
      // Vue
      get vue() {
        return eval("require")("./parser-html").parsers.vue;
      },
      // Angular
      get angular() {
        return eval("require")("./parser-html").parsers.angular;
      },
      // Lightning Web Components
      get lwc() {
        return eval("require")("./parser-html").parsers.lwc;
      }
    }
  },

  // YAML - using parser-yaml:
  yaml,
  {
    parsers: {
      get yaml() {
        return eval("require")("./parser-yaml").parsers.yaml;
      }
    }
  }
];
