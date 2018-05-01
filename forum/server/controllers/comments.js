console.log("Comments Controller");

var mongoose = require("mongoose"),
    path = require("path"),
    bp = require("body-parser"),
    Comment = mongoose.model("Comments");


function CommentsController(){

  this.index = function(req, res){
    console.log("Index");
    Comment.find({}, function(err, comments){
      if(err) return handleError(err);
      //console.log(comments);
      res.json(comments);
    });
  };
  
  this.create = function(req, res){
    console.log("Create");
    //console.log("Dir req");
    //console.log(req.body);
    var comment = new Comment(req.body);
    comment.save(function(error, comment){
      if(error){
        return res.json(error);
      } else if(comment){
        return res.json(comment);
      }
      //console.log(error);
      //console.log(comment);
      //res.json("Comment add success");
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
    Comment.findById(req.params.id, function(err, comment){
      if(err){console.log(err);}
      //console.log(comment);
      comment.name = req.body.name;
      comment.save();
    });
    //console.log(comment.name);
    res.json("Update success");
  };

  this.delete = function(req, res){
    //console.log("Delete");
    //console.log(req.params.id);
    Comment.find({_id:req.params.id}).remove().exec();
    // my code here...
    res.json("Comment deleted");
  };
}

module.exports = new CommentsController();
