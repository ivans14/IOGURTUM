/* eslint-disable quote-props */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'google'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'indent': 'off',
    'operator-linebreak': 'off',

    // quotes: ["error", "single"],
    // we want to force semicolons
    'semi': ['error', 'always'],
    // we use 2 spaces to indent our code
    // indent: ["error", 2],
    // we want to avoid extraneous spaces
    // "no-multi-spaces": ["error"],
    'require-jsdoc': 'off',
    'linebreak-style': 0,
  },
};
