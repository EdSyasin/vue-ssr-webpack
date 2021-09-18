const webpack = require('webpack')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
	entry: __dirname + "/src/entry-client.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js",
		publicPath: "/"
	},
	plugins: [
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: "manifest",
		// 	minChunks: Infinity
		// }),
		// Плагин генерирует `vue-ssr-client-manifest.json` в output-каталоге
		new VueSSRClientPlugin(),
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', ".vue"],
		alias: {
			"@": __dirname + "/src"
		}
	}
}