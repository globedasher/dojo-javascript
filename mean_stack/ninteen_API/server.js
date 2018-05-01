var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/people_db');

app.use(bodyParser.json());

var PersonSchema = new mongoose.Schema({
  name: String,
});

mongoose.model('Person', PersonSchema);
var Person = mongoose.model('Person');

// Show all people in database
app.get('/', function(req, res){
  Person.find({}, function(err, person){
    res.send(person);
  });
});

// Adds a new person to the database.
app.get('/new/:name', function(req, res){
  var person = new Person();
  person.name = req.params.name;
  person.save(function(err){
    res.redirect('/');
  });
});

// Removes a specific person from the databse.
app.get('/remove/:name', function(req, res){
  Person.remove({name: req.params.name}, function(err){
    res.redirect('/');
  });
});

// Display a document for an individual.
app.get('/:name', function(req, res){
  Person.find({name: req.params.name}, function(err, person){
    res.send(person);
  });
});

app.listen('8000', function(){
  console.log('Server listening on port 8000');
});
