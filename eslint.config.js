const react = require('eslint-plugin-react');
const ts = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const globals = require('globals');

module.exports = [
  {
    files: ['Zuydle/src**/*.{js,jsx,mjs,cjs,ts,tsx}'], // Target files
    plugins: {
      react, // Register the react plugin
      '@typescript-eslint': ts, // Register the TypeScript plugin
    },
    languageOptions: {
        parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX
        },
      },
      globals: {
        ...globals.browser, // Include browser globals like window, document, etc.
      },
    },
    
    rules: {
      'react/react-in-jsx-scope': 'off', // Disable the rule since React 17+ does not require React in scope
      'react/jsx-uses-react': 'off', // Disable rule for React 17+ JSX Transform
      'react/jsx-uses-vars': 'error', // Prevent variables used in JSX from being marked as unused
      '@typescript-eslint/no-unused-vars': 'error', // Prevent unused variables in TypeScript
    },
  },
];