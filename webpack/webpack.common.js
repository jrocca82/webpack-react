const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const VENDOR_LIBS = ["react", "react-dom", "react-router-dom"];

const APP_DIR = path.join(__dirname, "../src");
const BUILD_DIR = path.join(__dirname, "../dist");

module.exports = {
	entry: {
		main: APP_DIR + "/index.js",
		vendors: VENDOR_LIBS,
	},
	output: {
		path: BUILD_DIR,
		filename: "[name].[chunkhash].js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					babelrc: false,
					presets: [
						["@babel/preset-env", { modules: false }],
						["@babel/preset-react", { runtime: "automatic" }],
					],
					plugins: ["@babel/plugin-proposal-class-properties", "syntax-dynamic-import"]
				},
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
			template: "./docs/index.html",
			favicon: "public/favicon.ico",
		}),
		new webpack.optimize.SplitChunksPlugin({
			cacheGroups: {
				shared: {
					test: /node_modules[\\/](?!axios)/,
					name: "shared",
					enforce: true,
					chunks: "all",
				},
			},
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
};
