run_spec(__dirname, ["flow", "typescript"], {
  disableBabelTS: ["comments.js"]
});
run_spec(__dirname, ["babel", "babel-flow", "babel-ts"]);
