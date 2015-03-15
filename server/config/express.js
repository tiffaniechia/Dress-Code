var express = require('express');
var ejs = require('ejs');

module.exports = function (app, config) {
    app.engine('html', ejs.renderFile);
    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'html');
    app.use(express.static(config.rootPath + '/public'));
};
