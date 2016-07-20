var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/', routes);
app.use('/users', users);

app.get('/', function (req, res) {
  //res.send('Hello World!');
});

app.get('./public/src/json/issues.json', function (req, res) {
  console.log('ddfsdfsdfdsfdsfds');

  var fs = require('fs');
  //fs.appendFile("./public/src/json/issues-new.json", JSON.stringify(data), function(err) {
  fs.readFile('./public/src/json/issues.json', function (err, data) {
    if (err) throw err;
    console.log(data);
  });

});

var phases = require('./public/src/json/poll');
console.log(phases);

app.post('/issues', function (req, res) {
  var data = req.body;
  var fs = require('fs');
  //fs.appendFile("./public/src/json/issues-new.json", JSON.stringify(data), function(err) {
  fs.writeFile("./public/src/json/issues.json", JSON.stringify(data), function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Файл Збережено!");
    }
  });

  res.send('nice');

});

app.post('/comments', function (req, res) {
  var data = req.body;
  var fs = require('fs');
  //fs.appendFile("./public/src/json/issues-new.json", JSON.stringify(data), function(err) {
  fs.writeFile("./public/src/json/comments.json", JSON.stringify(data), function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Файл2 Збережено!");
    }
  });

  res.send('nice2');

});

app.post('/poll', function (req, res) {
  var data = req.body;
  var fs = require('fs');
  //fs.appendFile("./public/src/json/issues-new.json", JSON.stringify(data), function(err) {
  fs.writeFile("./public/src/json/poll.json", JSON.stringify(data), function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Файл3 Збережено!");
    }
  });

  res.send('nice3');

});

app.listen(5000, function () {
  console.log('5000-ий порт!');
});

module.exports = app;
