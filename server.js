var express = require('express'),
    mongoose = require('mongoose'),
    chalk = require('chalk');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/server/views');
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/dresscodefordeloitte');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database connection error...'));
db.once('open', function callback() {
    console.log(chalk.green('Dress Code For Deloitte Database Opened'));
});

var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc){
    mongoMessage = messageDoc.message;
});

app.get('/partials/:partialsPath', function (req, res) {
    res.render('partials/' + req.params.partialsPath);
});

app.get('*', function (req, res) {
    res.render('index', {
        mongoMessage : mongoMessage
    });
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log(chalk.green('Listening on port ' + port ));