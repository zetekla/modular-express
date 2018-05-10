var express = require('express'),
    app     = module.exports = express();

var login   = require('login'),
  signup    = require('signup'),
  userList  = require('user-list');

app.use(function (req, res, next) { login });
app.use(function (req, res, next) { signup });
app.use(function (req, res, next) { userList });

app.listen(3034);
console.log('listening on port 3034');
