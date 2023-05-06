module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto', singleQuote: true }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
    'no-else-return': 'error',
  },
};
