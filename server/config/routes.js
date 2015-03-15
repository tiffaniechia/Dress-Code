var mongoose = require('mongoose');

var Product = mongoose.model('Product');

var setRoutes= function (app) {

    app.get('/productsList', function(req, res){
        Product.find({}).exec(function(err, collection){
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
