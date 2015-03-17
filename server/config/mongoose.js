var mongoose = require('mongoose');
var chalk = require('chalk');

var productModel = require('../models/Products');
var voucherModel = require('../models/Vouchers');

var setMongooseConnection = function (config, env) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', function (err) {
        console.error(chalk.red('MongoDB connection error: ' + err));
        process.exit(-1);
    });
    db.once('open', function callback() {
        console.log(chalk.green('Dress Code For Deloitte Database Opened'));
    });

    productModel.createDefaultProducts(env);
    voucherModel.createDefaultProducts(env);
};

module.exports = setMongooseConnection;