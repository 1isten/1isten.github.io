/* eslint-disable prettier/prettier */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 6,
    // requireConfigFile: false,
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    // 'eslint:recommended',
    'plugin:vue/essential',
  ],
  plugins: [
    'prettier',
    'vue',
  ],
  rules: {
    'no-alert': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        quoteProps: 'preserve',
        trailingComma: 'es5',
        arrowParens: 'avoid',
      },
    ],
  },
};
