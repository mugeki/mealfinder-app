const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PurgeCSSPlugin = require("purgecss-webpack-plugin");
const glob = require("glob");
const PATHS = {
	src: path.resolve(__dirname, "src"),
	dist: path.resolve(__dirname, "dist"),
};

module.exports = {
	entry: "./src/app.js",
	output: {
		path: PATHS.dist,
		filename: "bundle.js",
	},
	mode: "production",
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
		new PurgeCSSPlugin({
			paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
			safelist: [
				"md:mx-auto",
				"md:w-7/12",
				"md:w-10/12",
				"md:max-h-full",
				"md:max-w-lg",
				"md:rounded-l-md",
				"md:rounded-t-none",
				"md:flex",
				"md:flex-row",
			],
		}),
	],
};
