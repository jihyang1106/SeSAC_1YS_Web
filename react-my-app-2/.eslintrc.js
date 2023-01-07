module.exports = {
  extends: ['airbnb-base'],
  parser: 'babel-parser',
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
    indent: 'off',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
