run_spec(__dirname, ["flow", "babel", "babel-ts"], {
  singleQuote: false,
  jsxSingleQuote: false
});
run_spec(__dirname, ["flow", "babel", "babel-ts"], {
  singleQuote: false,
  jsxSingleQuote: true
});
run_spec(__dirname, ["flow", "babel", "babel-ts"], {
  singleQuote: true,
  jsxSingleQuote: false
});
run_spec(__dirname, ["flow", "babel", "babel-ts"], {
  singleQuote: true,
  jsxSingleQuote: true
});
