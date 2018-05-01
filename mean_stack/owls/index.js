var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var ejs = require('ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/owls');

var OwlSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

mongoose.model('Owl', OwlSchema);
var Owl = mongoose.model('Owl');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
  Owl.find({}, function(err, owls){
    if(err){
      //console.log('error with retrieveal');
    }else{
      //console.log('retrieval!');
      res.render('index', { owls: owls });
    }
  });
});


// Delete all Owls
app.post('/owls/destroy', function(req, res){
  //console.log('Destroy!');
  Owl.remove({}, function(err){
    //console.log('attempt');
    res.redirect('/');
  });
});

// Delete one Owl
app.post('/owls/destroy/:id', function(req, res){
  //console.log('Destroy!');
  Owl.remove({_id: req.params.id}, function(err){
    //console.log('attempt');
    res.redirect('/');
  });
});



// Edit post route
app.post('/owls/:id', function(req, res){
  console.log('Update Route');
  console.log(req.params.id);
  console.log(req.body.name);
  console.log(req.body.age);
  Owl.update({_id: req.params.id}, {name: req.body.name, age: req.body.age}, function(err){
    res.redirect('/');

  });
});










// get a form to edit an individual Owl
app.get('/owls/edit/:id', function(req, res){
  //console.log(req.params.id + ' req.params.id');
  Owl.find({_id:req.params.id }, function(err, owl){
    if(err){
      //console.log('something went wrong');
    }else{
      //console.log(owl);
      //console.log('something went right');
      res.render('edit', {owl: owl});
    }
  });
});

// Show a form to create a new Owl
app.get('/owls/new', function(req, res){
  //console.log('show new form');
  res.render('form');
});

// show an individual Owl information
app.get('/owls/:id', function(req, res){
  Owl.find({_id: req.params.id}, function(err, owl){
    if(err){
      //console.log('something went wrong');
    }else{
      //console.log(owl);
      //console.log('something went right');
      res.render('show', {owl: owl});
    }
  });
});

// Create a new Owl
app.post('/owls', function(req, res){
  console.log('create?');
  
  //console.log('POST DATA', req.body);
  var owl = new Owl({name: req.body.name, age: req.body.age});
  owl.save(function(err){
    if(err){
      //console.log('something went wrong');
    }else{
      //console.log('something went right');
      res.redirect('/');
    }
  });
});

app.listen('8000', function(){
  console.log('Server listening on port 8000');
});
