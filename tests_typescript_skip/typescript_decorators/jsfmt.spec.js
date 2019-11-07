run_spec(__dirname, ["typescript"], {
  disableBabelTS: [
    // output changed:
    "decorators-comments.js",
    // SyntaxError:
    "interface.ts"
  ]
});
