module.exports = {
	mount: {
		public: {
			url: '/',
			static: true,
			resolve: false
		},
		src: '/dist'
	},
	plugins: [
		'@snowpack/plugin-typescript'
	],
	devOptions: {
		port: 8000,
		open: 'none'
	},
	buildOptions: {
		out: '_build'
	},
	optimize: {
		bundle: true,
		minify: true,
		sourcemap: false
	},
	alias: {
		'@': './src',
		'@lib': './src/lib',
		'@Scenes': './src/Scenes'
	}
};