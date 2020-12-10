module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  // parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'no-alert': "error"
  },
  globals: {
    jQuery: "readonly"
  }
}