module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'eslint-plugin-no-inline-styles',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  rules: {
    'react/require-default-props': 'off',
    'linebreak-style': 0,
    'no-console': 'error',
    'max-len': 'off',
    'react/forbid-prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'no-inline-styles/no-inline-styles': 2,
    'no-unused-vars': 'error',
    'react/jsx-props-no-spreading': 'off',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'no-debugger': 0,
    'prefer-arrow-callback': 2,
    'consistent-return': 0,
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
  },
};
