console.log("Friends Controller");

var mongoose = require("mongoose"),
    path = require("path"),
    bp = require("body-parser"),
    Friend = mongoose.model("friends");


function FriendsController(){

  this.index = function(req, res){
    console.log("Index");
    Friend.find({}, function(err, friends){
      if(err) return handleError(err);
      //console.log(friends);
      res.json(friends);
    });
  };
  
  this.create = function(req, res){
    console.log("Create");
    //console.log("Dir req");
    //console.log(req.body);
    var friend = new Friend(req.body);
    friend.save(function(error, friend){
      if(error){
        return res.json(error);
      } else if(friend){
        return res.json(friend);
      }
      //console.log(error);
      //console.log(friend);
      //res.json("Friend add success");
    });
  };

  this.show = function(req, res){
    console.log("Show");
    // my code here...
    res.json({placeholder: "show"});
  };

  this.update = function(req, res){
    console.log("Update");
    //console.log(req.params.id);
    //console.log(req.body);
    Friend.findById(req.params.id, function(err, friend){
      if(err){console.log(err);}
      //console.log(friend);
      friend.name = req.body.name;
      friend.save();
    });
    //console.log(friend.name);
    res.json("Update success");
  };

  this.delete = function(req, res){
    //console.log("Delete");
    //console.log(req.params.id);
    Friend.find({_id:req.params.id}).remove().exec();
    // my code here...
    res.json("Friend deleted");
  };
}

module.exports = new FriendsController();
