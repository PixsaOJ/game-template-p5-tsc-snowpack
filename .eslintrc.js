module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	env: {
		'shared-node-browser': true
	},
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
		'semi': ['error', 'always'],
		'no-console': 2,
		'quotes': ['error', 'single'],
		'curly': 0,
		'brace-style': ['error', 'stroustrup'],
		'eol-last': ['error', 'never'],
		'@typescript-eslint/no-unused-vars': 2,
		'indent': [
			'error',
			'tab'
		]
	}
};