console.log("UsersController");

var mongoose = require("mongoose"),
    path = require("path"),
    bp = require("body-parser"),
    User = mongoose.model("Users");

function handleError(err){
  console.log(err);
  return err;
}


function UsersController(){

  this.index = function(req, res){
    //console.log("Index");
    User.find({})
    .populate("bucketlists")
    .populate("_userB")
    .exec(function(err, users){
      if(err) console.log("Errors!");
      //console.log(users);
      res.json(users);
    });
  };
  
  // DONE: Sending responses and errors to the front end.
  this.create = function(req, res){
    console.log("Create User");
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
}


module.exports = new UsersController();
