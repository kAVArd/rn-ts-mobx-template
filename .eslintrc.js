module.exports = {
  root: true,
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-console': 'warn',
    
    '@typescript-eslint/no-explicit-any': 'on',
    '@typescript-eslint/no-empty-interface': 'on',
    '@typescript-eslint/explicit-member-accessibility': 'explicit',
    '@typescript-eslint/no-magic-numbers': 'on',
  },
};
