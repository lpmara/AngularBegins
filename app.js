var express = require('express');
var compress = require('compression');
var expressLayouts = require('express-ejs-layouts');
// var livereload = require('connect-livereload');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var customers = require('./routes/customers');


var debug = require('debug')('Mgular');

var app = express();






// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(compress());
app.use(expressLayouts);
//app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(livereload({port: 35729}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.resolve('./node_modules')));

app.use('/', index);
app.use('/customers', customers);


app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});

module.exports = app;
