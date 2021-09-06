module.exports = {
	plugins: [
		[
			[
				'module-resolver',
				{
					root: ['./src/**'],
					aliases: [
						{ '@lib': './src/lib' },
						{ '@Scenes': './src/scenes' }
					]
				}
			],
			'@babel/plugin-transform-classes'
		]
	]
};