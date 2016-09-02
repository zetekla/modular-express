var express = require('express'),
  app = module.exports = express();

app.post('/post', function(req, res){
  res.send('send list of posts');
});