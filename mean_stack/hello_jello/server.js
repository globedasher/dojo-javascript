/***********************************server.js*********************************
 * This is an HTTP server written with Express to run with Node JS.
 *
 * by Richard Morley
 *************************************END************************************/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Set the app the use the static folder for static files!
app.use(express.static(__dirname + '/static'));
// Setup the bodyParser to use extended.
app.use(bodyParser.urlencoded({ extended:true }));
app.set('views',(__dirname + '/views'));
app.set('view engine', 'ejs');

// Setup the index route.
app.get('/', function(request, response){
  response.render('index', {title: 'my express object'});
});

// Setup the users GET route.
app.get('/users', function(request, response){
  var users_array = [
    { name: 'Michael', email: 'michael@codingdojo.com' },
    { name: 'Jay', email: 'jay@codingdojo.com' },
    { name: 'Brendan', email: 'brenden@codingdojo.com' },
    { name: 'Andrew', email: 'andrew@codingdojo.com' },
  ];
  response.render('users', { users: users_array });
});

// Setup the users POST route.
app.post('/users', function(request, response){
  console.log('POST DATA \n\n', request.body);
  response.redirect('/');
});

// Setup the user GET route.
app.get('/users/:id', function(request, response){
  console.log('The user_id requested is: ', request.params.id);
  response.status('The user_id requested is: ').send(request.params.id);
});

// Start the server listening on port 8000.
app.listen(8000, function(){
  console.log('Server listening on port 8000');
});
