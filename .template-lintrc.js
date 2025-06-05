module.exports = {
  extends: "ember-template-lint:recommended",
  plugins: ["ember-template-lint-plugin-discourse"],
  rules: {
    "no-implicit-this": {
      allow: ["stars", "sortValue"]
    },
    "no-html-comments": true,
    "no-inline-styles": false,
    "require-input-label": false
  }
};
