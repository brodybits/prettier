"use strict";

//
// BEFORE:
//   eval("require")
//
// AFTER:
//   require
//

module.exports = function(babel) {
  const t = babel.types;

  return {
    visitor: {
      CallExpression(path) {
        const { node } = path;
        if (
          t.isCallExpression(node) &&
          t.isIdentifier(node.callee, { name: "eval" }) &&
          node.arguments.length === 1 &&
          t.isLiteral(node.arguments[0], { value: "require" })
        ) {
          path.replaceWith(t.identifier("require"));
        }
      }
    }
  };
};
