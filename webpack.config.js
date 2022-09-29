const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;

module.exports = {
	mode: "development",
	entry: "./src/index.js",
  watch: true,
	output: {
		filename: "dist/app.bundle.js",
	},
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
						options: {
							modules: true,
							sourceMap: true,
						},
					},
				],
			},
            {
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: ["file-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html",
			favicon: "public/favicon.ico",
		}),
	],
	devServer: {
		host: "localhost",
		port: port,
		historyApiFallback: true,
		open: true
	},
};