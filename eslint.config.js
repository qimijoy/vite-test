import globals from 'globals';

import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
	// GLOBAL IGNORES
	{
		ignores: ['**/node_modules/*', '**/dist/*'],
	},
	// FILES TO LINT
	{
		files: ['**/*.{js,mjs,cjs}'],
	},
	// GLOBAL LANGUAGE & LINTER SETTINGS
	{
		languageOptions: {
			ecmaVersion: 'latest',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2022,
			},
		},
		linterOptions: {
			noInlineConfig: true,
			reportUnusedDisableDirectives: 'error',
		},
	},

	js.configs.recommended,
	jsdoc.configs['flat/recommended'],
	{
		name: 'JS',
		files: ['**/*.{js,mjs,cjs}'],
		plugins: {
			jsdoc,
		},
		rules: {
			...js.configs.recommended.rules,
			...jsdoc.configs['flat/recommended'].rules,
		},
	},

	eslintPluginPrettierRecommended,
];
