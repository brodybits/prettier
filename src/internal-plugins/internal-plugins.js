"use strict";

const js = require("../language-js");
const css = require("../language-css");
const handlebars = require("../language-handlebars");
const graphql = require("../language-graphql");
const markdown = require("../language-markdown");
const html = require("../language-html");
const yaml = require("../language-yaml");

const requireInternalPlugin = require("./require-internal-plugin");

// We need to list the parsers and getters so we can load them only when necessary.
module.exports = [
  // from language-js:
  js,
  {
    parsers: {
      // JS - Babel
      get babel() {
        return requireInternalPlugin("./parser-babylon").parsers.babel;
      },
      get "babel-flow"() {
        return requireInternalPlugin("./parser-babylon").parsers[
          "babel-flow"
        ];
      },
      get "babel-ts"() {
        return requireInternalPlugin("./parser-babylon").parsers[
          "babel-ts"
        ];
      },
      get babylon() {
        return requireInternalPlugin("./parser-babylon").parsers.babel;
      },
      get json() {
        return requireInternalPlugin("./parser-babylon").parsers.json;
      },
      get json5() {
        return requireInternalPlugin("./parser-babylon").parsers.json5;
      },
      get "json-stringify"() {
        return requireInternalPlugin("./parser-babylon").parsers[
          "json-stringify"
        ];
      },
      get __js_expression() {
        return requireInternalPlugin("./parser-babylon").parsers
          .__js_expression;
      },
      get __vue_expression() {
        return requireInternalPlugin("./parser-babylon").parsers
          .__vue_expression;
      },
      get __vue_event_binding() {
        return requireInternalPlugin("./parser-babylon").parsers
          .__vue_event_binding;
      },
      // JS - Flow
      get flow() {
        return requireInternalPlugin("./parser-flow").parsers.flow;
      },
      // JS - TypeScript
      get typescript() {
        return requireInternalPlugin("./parser-typescript").parsers
          .typescript;
      },
      // JS - Angular Action
      get __ng_action() {
        return requireInternalPlugin("./parser-angular").parsers
          .__ng_action;
      },
      // JS - Angular Binding
      get __ng_binding() {
        return requireInternalPlugin("./parser-angular").parsers
          .__ng_binding;
      },
      // JS - Angular Interpolation
      get __ng_interpolation() {
        return requireInternalPlugin("./parser-angular").parsers
          .__ng_interpolation;
      },
      // JS - Angular Directive
      get __ng_directive() {
        return requireInternalPlugin("./parser-angular").parsers
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
        return requireInternalPlugin("./parser-postcss").parsers.css;
      },
      get less() {
        return requireInternalPlugin("./parser-postcss").parsers.css;
      },
      get scss() {
        return requireInternalPlugin("./parser-postcss").parsers.css;
      }
    }
  },

  // Handlebars - using parser-glimmer:
  handlebars,
  {
    parsers: {
      get glimmer() {
        return requireInternalPlugin("./parser-glimmer").parsers
          .glimmer;
      }
    }
  },

  // GraphQL - using parser-graphql:
  graphql,
  {
    parsers: {
      get graphql() {
        return requireInternalPlugin("./parser-graphql").parsers
          .graphql;
      }
    }
  },

  // using parser-markdown:
  markdown,
  {
    parsers: {
      get remark() {
        return requireInternalPlugin("./parser-markdown").parsers
          .remark;
      },
      get markdown() {
        return requireInternalPlugin("./parser-markdown").parsers
          .remark;
      },
      get mdx() {
        return requireInternalPlugin("./parser-markdown").parsers
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
        return requireInternalPlugin("./parser-html").parsers.html;
      },
      // Vue
      get vue() {
        return requireInternalPlugin("./parser-html").parsers.vue;
      },
      // Angular
      get angular() {
        return requireInternalPlugin("./parser-html").parsers.angular;
      },
      // Lightning Web Components
      get lwc() {
        return requireInternalPlugin("./parser-html").parsers.lwc;
      }
    }
  },

  // YAML - using parser-yaml:
  yaml,
  {
    parsers: {
      get yaml() {
        return requireInternalPlugin("./parser-yaml").parsers.yaml;
      }
    }
  }
];
