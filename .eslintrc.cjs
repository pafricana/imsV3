module.exports = {
  extends: "discourse",
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  rules: {
    "no-console": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "semi": ["error", "always"]
  },
  globals: {
    "withPluginApi": true
  }
};
