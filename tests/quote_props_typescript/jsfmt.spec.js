run_spec(__dirname, ["babel-ts"], {
  quoteProps: "as-needed"
});

run_spec(__dirname, ["babel-ts"], {
  quoteProps: "preserve"
});

run_spec(__dirname, ["babel-ts"], {
  quoteProps: "consistent"
});
