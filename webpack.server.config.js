// const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: __dirname + "/src/entry-server.js",
	output: {
		path: __dirname + "/dist",
		filename: "server-bundle.js",
		libraryTarget: "commonjs2",
		publicPath: "/"
	},
	devtool: 'source-map',
	target: "node",
	plugins: [
		new VueSSRServerPlugin(),
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
	externals: nodeExternals({
		allowlist: /\.css$/
	}),
	resolve: {
		extensions: ['.js', ".vue"],
		alias: {
			"@": __dirname + "/src"
		}
	}
}