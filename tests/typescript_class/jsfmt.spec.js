run_spec(__dirname, ["typescript"], {
  disableBabelTS: [
    // syntax error:
    "constructor.ts",
    "generics.ts",
    "methods.ts",
    // updated snapshot needed:
    "quoted-property.ts"
  ]
});
