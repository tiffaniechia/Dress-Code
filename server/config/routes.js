module.exports = function (app){
    app.get('/partials/:partialsPath', function (req, res) {
        res.render('partials/' + req.params.partialsPath);
    });

    app.get('*', function (req, res) {
        res.render('index');
    });
};