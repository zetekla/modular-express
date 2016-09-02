var express = require('express'),
  app = module.exports = express();

app.set('views', __dirname);
app.set('view engine', 'pug');

app.get('/login', function(req, res){
  res.render('form');
});