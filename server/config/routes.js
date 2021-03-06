var mongoose = require('mongoose');

var Product = mongoose.model('Product');
var Voucher = mongoose.model('Voucher');

var setRoutes= function (app) {

    app.get('/api/products', function(req, res){
        Product.find({}).exec(function(err, collection){
            res.send(collection);
        });
    });

    app.get('/api/vouchers', function(req, res){
        Voucher.find({}).exec(function(err, collection){
            res.send(collection);
        });
    });

    app.get('/partials/*', function (req, res) {
        res.render('partials/' + req.params[0]);
    });

    app.get('*', function (req, res) {
        res.render('index');
    });
};

module.exports = setRoutes;
