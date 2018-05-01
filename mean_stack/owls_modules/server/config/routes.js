var mongoose = require('mongoose');
var Owl = mongoose.model('Owl');

var owls = require('../controllers/owls.js');

module.exports = function(app){

  // Show all owls
  app.get('/', function(req, res){
    owls.show(req, res);
  });


  // Delete all Owls
  app.post('/owls/destroy', function(req, res){
    owls.deleteAll(req, res);
  });

  // Delete one Owl
  app.post('/owls/destroy/:id', function(req, res){
    owls.deleteOne(req, res);
  });



  // Edit post route
  app.post('/owls/:id', function(req, res){
    owls.edit(req, res);
  });

  // get a form to edit an individual Owl
  app.get('/owls/edit/:id', function(req, res){
    owls.editForm(req, res);
  });

  // Show a form to create a new Owl
  app.get('/owls/new', function(req, res){
    owls.showNew(req, res);
  });

  // show an individual Owl information
  app.get('/owls/:id', function(req, res){
    owls.showOne(req, res);
  });

  // Create a new Owl
  app.post('/owls', function(req, res){
    owls.create(req, res);
  });
};
