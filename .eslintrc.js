/* eslint-disable semi */
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
	],
	env: {
		'shared-node-browser': true,
		node: true,
		browser: true,
	},
	rules: {
		'semi': ['error', 'always'],
		'no-console': 2,
		'quotes': ['error', 'single'],
		'curly': 0,
		'brace-style': ['error', 'stroustrup'],
		'indent': [
			'error',
			'tab'
		]
	}
}