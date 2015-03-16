var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');

var setExpressViews = function (app, config) {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.engine('html', ejs.renderFile);
    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'html');
    app.use(express.static(config.rootPath + '/public'));
};

module.exports = setExpressViews;