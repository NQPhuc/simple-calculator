module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['error', process.env.NODE_ENV === 'production' ? 'unix' : 'windows'],
    'comma-dangle': 0,
    'no-unused-vars': 'off',
    quotes: 0,
    "space-before-function-paren": ["error", {
      anonymous: "always",
      named: "always",
      asyncArrow: "always"
    }],
    "import/extensions": [
      "off",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ],
    "prefer-destructuring": ["error", { object: true, array: false }]
  },
};
