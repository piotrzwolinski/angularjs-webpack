/// We use node in version 6, so we can use the ES2015 features
const config = {
	/// At first we need the input file ...
	entry: './src/index',
	//3/ ... and output file
	output: {
		filename: 'bundle.js',
	},
}

module.exports = config
