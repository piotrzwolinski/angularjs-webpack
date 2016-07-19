const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProdEnv = process.env.WEBPACK_ENV === 'production';

const config = {
	devtool: 'source-map',
	entry: './src/index',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	//3/ Webpack can catch the default extensions
	resolve: {
		extensions: ['', '.js', '.ts', '.json']
	},
	module: {
		loaders: [
			/// But we need to add a custom loader
			{ test: /\.ts$/, loaders: ['ts'], exclude: /node_modules/ },
			{ test: /\.styl$/, loaders: ['style', 'css', 'stylus'] },
		],
	},
	plugins: isProdEnv ? [
		new webpack.optimize.UglifyJsPlugin(),
		new CopyWebpackPlugin([{ from: './src/index.html', to: 'index.html' }])
	] : [],
}

module.exports = config
