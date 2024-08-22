const react = require('eslint-plugin-react');
const ts = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const globals = require('globals');

module.exports = [
  {
    files: ['Zuydle/src**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
      '@typescript-eslint': ts,
    },
    languageOptions: {
        parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    
    rules: {
      'react/react-in-jsx-scope': 'off', 
      'react/jsx-uses-react': 'off', 
      'react/jsx-uses-vars': 'error', 
      '@typescript-eslint/no-unused-vars': 'error', 
    },
  },
];