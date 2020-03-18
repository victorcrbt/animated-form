module.exports = {
  env: {
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'import',
    'react-hooks',
    'prettier',
    'jsx-a11y',
    'eslint-plugin-import-helpers',
  ],
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react/', '/^@react/'],
          'module',
          '/^~/util/',
          ['/^~/components/', '/^~/screens/'],
          '/^~/',
          ['parent', 'sibling', 'index'],
        ],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/Reactotron.js'] },
    ],
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'no-param-reassign': 'off',
    'global-require': 'off',
    'react-native/no-raw-text': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    camelcase: 'off',
    'no-console': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js', '.tsx'],
      },
    ],
    'import/extensions': [
      'error',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
        json: 'always',
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        directory: '.',
      },
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
      'babel-plugin-root-import': {
        paths: [
          {
            rootPathSuffix: 'src',
          },
        ],
      },
    },
  },
};
