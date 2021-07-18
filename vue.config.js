module.exports = {
	chainWebpack: (config) => {
		config.module
			.rule("markdown")
			.test(/\.md$/)
			.use("raw-loader")
			.loader("raw-loader");
	},
	devServer: {
		public: process.env.VUE_APP_HOST_URL,
		// https: true,
	},
	runtimeCompiler: true
};
