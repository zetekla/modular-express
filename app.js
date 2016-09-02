var express = require('express'),
    app     = module.exports = express();

var login   = require('./lib/login'),
  signup    = require('./lib/signup'),
  userList  = require('./lib/user-list');

app.use(login);
app.use(signup);
app.use(userList);

app.listen(3034);
console.log('listening on port 3034');
