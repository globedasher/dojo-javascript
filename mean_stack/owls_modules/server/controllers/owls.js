var mongoose = require('mongoose');
var Owl = mongoose.model('Owl');

module.exports = {
  // Show all owl entries
  show: function(req, res){
    Owl.find({}, function(err, owls){
      if(err){
        //console.log('error with retrieveal');
      }else{
        //console.log('retrieval!');
        res.render('index', { owls: owls });
      }
    });
  },
  
  // Show form for new owl
  showNew: function(req, res){
    res.render('form');
  },

  // Create a new owl
  create: function(req, res){
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
  },

  // Show details on one owl
  showOne: function(req, res){
    Owl.find({_id: req.params.id}, function(err, owl){
      if(err){
        //console.log('something went wrong');
      }else{
        //console.log(owl);
        //console.log('something went right');
        res.render('show', {owl: owl});
      }
    });
  },

  // Delete one owl entry
  deleteOne: function(req, res){
    //console.log('Destroy!');
    Owl.remove({_id: req.params.id}, function(err){
      //console.log('attempt');
      res.redirect('/');
    });
  },

  // Delete all owls at once
  deleteAll: function(req, res){
    //console.log('Destroy!');
    Owl.remove({}, function(err){
      //console.log('attempt');
      res.redirect('/');
    });
  },

  // display edit form
  editForm: function(req, res){
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
  },

  // POST edits to owl
  edit: function(req, res){
    console.log('Update Route');
    Owl.update({_id: req.params.id}, {name: req.body.name, age: req.body.age}, function(err){
      res.redirect('/');

    });
  },


};
