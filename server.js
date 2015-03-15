var express = require('express');
var mongoose = require('mongoose');
var chalk = require('chalk');

var setEnvConfigs = require('./server/config/config');
var setExpressViews = require('./server/config/express');
var setMongooseConnection = require('./server/config/mongoose');
var setRoutes = require('./server/config/routes');

var app = express();
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = setEnvConfigs[env];

setExpressViews(app, config);
setMongooseConnection(config, env);
setRoutes(app);

app.listen(config.port);
console.log(chalk.green('Listening on port ' + config.port));
