var express = require('express'),
  app = module.exports = express(),
  // user Model like from the database but from a flat json
  user = require('../user-api');

app.get('/users', function(req, res){
  user.all(function(err, users){
     res.send(users);
  });
});