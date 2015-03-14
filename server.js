var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/server/views');
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.get('/partials/:partialsPath', function (req, res) {
    res.render('partials/' + req.params.partialsPath);
});

app.get('*', function (req, res) {
    res.render('index');
});

var port = 8080;
app.listen(port);
console.log('Listening on port ' + port + '...');