var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
     devtool: "eval-source-map",//配置生成Source Maps，选择合适的选项
     entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
     output: {
          path: __dirname + "/build",//打包后的文件存放的地方
          filename: "bundle.js"//打包后输出文件的文件名
     },
     module: {
     	loaders: [
     		{
     			test: /\.json$/,
     			loader: "json"
     		},
     		{
     			test: /\.(js|jsx)$/,
     			exclude: /node_modules/,
     			loader: "babel",
     		},
     		{
     			test: /\.css$/,
     			loader: ExtractTextPlugin.extract('style','css?modules!postcss')
     		}
     	]
     },
     postcss: [
          require('autoprefixer')
     ],
     plugins: [
          	new webpack.BannerPlugin("from webcainiao"),
          	new HtmlWebpackPlugin(
          		{
          			template: __dirname+ "/app/index.tmpl.html"
          		}
          	),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin(),
            new ExtractTextPlugin("[name]-[hash].css")
     ]
}