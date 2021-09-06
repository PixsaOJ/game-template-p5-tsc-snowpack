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
		'@snowpack/plugin-babel'
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
		'@lib': './src/lib',
		'@Scenes': './src/Scenes'
	}
};