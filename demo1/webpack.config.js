var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
	entry : [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		path.resolve(__dirname,"app/main.js")
	],
	output : {
		path : path.resolve(__dirname,'build'),
		publicPath: "/assets/",
		filename : "bundle.js"
	},
	module : {
		loaders : [
			{
				test : /\.css$/,
				loader : "style!css"
			}
		]
	},
	plugins : [
		new HtmlWebpackPlugin(),
	]
};