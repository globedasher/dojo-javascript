console.log("UsersController");

var mongoose = require("mongoose"),
    path = require("path"),
    bp = require("body-parser"),
    User = mongoose.model("users");

function handleError(err){
  console.log(err);
  return err;
}

function UsersController(){

  this.index = function(req, res){
    console.log("Index");
    User.find({}, function(err, users){
      if(err) return handleError(err);
      //console.log(users);
      res.json(users);
    });
  };
  
  // DONE: Sending responses and errors to the front end.
  this.create = function(req, res){
    console.log("Create");
    //console.log("Dir req");
    //console.log(req.body);
    var user = new User(req.body);
    user.save(function(err, user){
      if(err){
        res.status(500).json(err);
      }else{
        res.status(200).json(user);
      }
    });
  };

  // TODO: Determine if I need this! I am actually just getting single users
  // from prexisting data on the front end...
  this.show = function(req, res){
    console.log("Show");
    // my code here...
    res.json({placeholder: "show"});
  };

  // DONE: Update method!
  this.update = function(req, res){
    console.log("Update");
    console.log(req.params.id);
    console.log("log 0");
    console.dir(req.body);

    User.findById(req.params.id, function(err, user){
      if(err){
        res.status(500).json(err);
      }
      console.log("log 1");
      console.log(user);
      console.log(user.name.first);
      console.log(user.name.last);
      console.log(user.email);
      //console.log(user.email);

      user.name.first = req.body.name.first;
      user.name.last = req.body.name.last;
      user.email = req.body.email;
      console.log("log 2");
      user.save(function(err, updatedUser){
        console.dir(err);
        if(err){
          res.status(500).json(err);
        }else{
          res.status(200).json(updatedUser);

        }
      });
      console.log("log 4");

    });
  };

  this.delete = function(req, res){
    //console.log("Delete");
    //console.log(req.params.id);
    User.find({_id:req.params.id}).remove().exec();
    // my code here...
    res.json("User deleted");
  };
}

module.exports = new UsersController();
