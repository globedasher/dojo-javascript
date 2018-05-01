var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var ejs = require('ejs');

app.set('views', __dirname + '/client/views');
app.set(express.static(path.join(__dirname, '/client/static')));
app.set('view engine', 'ejs');

require('./server/config/mongoose');

app.use(bodyParser.urlencoded({ extended: true }));

// Import the routes.js file here!
route_setter = require('./server/config/routes.js');
route_setter(app);

app.listen('8000', function(){
  console.log('Server listening on port 8000');
});
