run_spec(__dirname, ["babel", "flow", "babel-ts"]);
run_spec(__dirname, ["babel", "flow", "babel-ts"], {
  trailingComma: "all"
});
run_spec(__dirname, ["babel", "flow", "babel-ts"], {
  arrowParens: "always"
});
