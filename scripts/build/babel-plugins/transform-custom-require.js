"use strict";

//
// BEFORE:
//   eval("require")("./path/to/file")
//   eval("require")(identifier)
//   eval("require").cache
//
// AFTER:
//   require("./path/to/file")
//   require(identifier)
//   require.cache
//

module.exports = function(babel) {
  const t = babel.types;

  return {
    visitor: {
      CallExpression(path) {
        const { node } = path;
        if (isEvalRequire(node.callee) && node.arguments.length === 1) {
          const arg = node.arguments[0];
          path.replaceWith(t.callExpression(t.identifier("require"), [arg]));
        }
      }
    }
  };

  function isEvalRequire(node) {
    return (
      t.isCallExpression(node) &&
      t.isIdentifier(node.callee, { name: "eval" }) &&
      node.arguments.length === 1 &&
      t.isLiteral(node.arguments[0], { value: "require" })
    );
  }
};
