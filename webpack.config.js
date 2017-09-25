const path = require('path');

module.exports = {
	entry: './src/app.js',  //entry point
	output : { //output point
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	//loader
	module: {
		rules: [{
			loader: 'babel-loader', //loader name
			test: /\.js$/,  //files to send to loader
			exclude: /node_modules/  //files/folders to exclude
		}]
	},
	devtool: 'cheap-module-eval-source-map'
};



