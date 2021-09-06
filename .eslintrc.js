module.exports = {
	root: true,
	parser: 'babel-eslint',
	extends: [
		'eslint:recommended',
	],
	env: {
		'shared-node-browser': true,
		'node': true,
	},
	rules: {
		'semi': ['error', 'always'],
		'no-console': 2,
		'quotes': ['error', 'single'],
		'curly': 0,
		'brace-style': ['error', 'stroustrup'],
		'eol-last': ['error', 'never'],
		'indent': [
			'error',
			'tab'
		]
	}
};