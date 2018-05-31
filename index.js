var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var db = require('./models');
var User = db.User;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function() {
  db.sequelize.sync();
});

app.get('/', function (req, res) {
  User.findAll().then(users => {
    // res.json(users);
    res.send(users);
  });
});

app.post('/setAnswersToDB', function (req, res) {
  console.log('req', req.body);
  User.create(req.body)
	  .then(function (user) {
	    // res.json(user);
	    res.send(user);
	  });
});