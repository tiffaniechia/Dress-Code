var express = require('express');
var mongoose = require('mongoose');
var chalk = require('chalk');

var app = express();
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var setEnvConfigs = require('./server/config/config');
var config = setEnvConfigs[env];

var setExpressViews = require('./server/config/express');
setExpressViews(app, config);

var setMongooseConnection = require('./server/config/mongoose');
setMongooseConnection(config, env);

var setRoutes = require('./server/config/routes');
setRoutes(app);

app.listen(config.port);
console.log(chalk.green('Listening on port ' + config.port));
