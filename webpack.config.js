const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
	entry: __dirname + "/src/main.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js",
		publicPath: "/"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/public/index.html",
			inject: "body"
		}),
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
	},
	devServer: {
		//contentBase: __dirname + '/public',
		port: 9000
	}
}