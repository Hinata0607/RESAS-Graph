module.exports = {
	root: true,
	extends: [
	  'plugin:@typescript-eslint/recommended',
	  'next/core-web-vitals',
	  'prettier',
	],
	plugins: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
	  project: './tsconfig.json',
	},
	rules: {
	  '@typescript-eslint/no-unused-vars': 'error',
	  '@typescript-eslint/no-explicit-any': 'warn',
	  '@typescript-eslint/no-unsafe-call': 'error',
	  '@typescript-eslint/no-unsafe-member-access': 'error',
	  '@typescript-eslint/no-unsafe-return': 'error',
	  'react/no-unescaped-entities': 'off',
	},
	ignorePatterns: [
	  "/lib/**/*", // Ignore built files.
	  "**/*.js",
	  "src/hooks/__mock__/**/*", // Ignore mock directory
	],
  };
  