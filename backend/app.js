var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var chat = require('./routes/chat');
var mongoose = require('mongoose');

require('./models/charity_model');
require('./models/donator_model');
require('./models/password_model');
require('./models/messagehistory');


var index = require('./routes/index');
//var users = require('./routes/users');
var charity_routes = require('./routes/charity_routes');
var donator_routes = require('./routes/donator_routes');
var login_routes = require('./routes/login_routes');
var charity_profile = require('./routes/charity_profile');
var donor_profile = require('./routes/donor_profile');
var charity_sidebar = require('./routes/charity_sidebar');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/


//app.use('/users', users);

app.use('/', index);
app.use('/login', login_routes);
app.use('/charityportal', charity_routes);
app.use('/donatorportal', donator_routes);
app.use('/charityprofile', charity_profile);
app.use('/donorprofile', donor_profile);
app.use('/charitysidebar', charity_sidebar);


var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
app.use('/static', express.static('node_modules'));
server.listen(8080);
chat(app,io);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
