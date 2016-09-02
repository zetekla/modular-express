var express = require('express'),
    app     = module.exports = express();

var login   = require('login'),
  signup    = require('signup'),
  userList  = require('user-list');

app.use(login);
app.use(signup);
app.use(userList);

app.listen(3034);
console.log('listening on port 3034');
