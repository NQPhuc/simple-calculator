module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
    "plugin:vue/essential",
    "eslint:recommended",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    'linebreak-style': ['off', process.env.NODE_ENV === 'production' ? 'unix' : 'windows'],
    quotes: 0,
    "no-unused-vars": "off",
    'import/no-unresolved': 'off',
    'comma-dangle': 0,
    'no-param-reassign': 'off',
    "import/extensions": 'off',
    "space-before-function-paren": ["error", {
      anonymous: "always",
      named: "always",
      asyncArrow: "always"
    }],
  },
};
