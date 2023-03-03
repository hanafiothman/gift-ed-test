module.exports = {
	'env': {
		'node': true,
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'no-unused-vars': [
			'warn',
			{ 
				'vars': 'all',
				'args': 'after-used',
				'ignoreRestSiblings': false,
				'argsIgnorePattern': '^_',
				'varsIgnorePattern': '^_',
				'caughtErrorsIgnorePattern': '^_'
			}
		],
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		// 'indent': [
		// 	'error',
		// 	'tab'
		// ],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'warn',
			'single',
			{ 'allowTemplateLiterals': true }
		],
		'react/display-name': 'off',
		'react/no-unescaped-entities': 'warn'
		// 'semi': [
		// 	'error',
		// 	'always'
		// ]
	}
};
