const path = require('path');
function resolve (dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	assetsDir: 'static',
	devServer: {
		port: 3002
	},
	chainWebpack: (config)=>{
		config.resolve.alias
			.set('@', resolve('src'))
			.set('assets',resolve('src/assets'))
			.set('components',resolve('src/components'))
			.set('styles',resolve('src/styles'))
			.set('router',resolve('src/router'))
			.set('utils',resolve('src/utils'))
			.set('views',resolve('src/views'))
	}
};
