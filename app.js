var express = require('express'),
	app = express(),
	port = process.env.PORT || 8484,
	config = require('./sever/configurations');

config.load();

if (process.config && process.config.combiner && process.config.combiner.enable) {

	if (process.config.combiner.minify) {
		let compression = require('compression');
		let minify = require('express-minify');

		app.use(compression);
		app.use(minify);
	}

	require('./sever/combiner').initialize();

}

console.log("App listening on port " + port);