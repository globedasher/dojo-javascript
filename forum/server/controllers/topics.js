console.log("TopicsController");

var mongoose = require("mongoose"),
    path = require("path"),
    bp = require("body-parser"),
    Post = mongoose.model("Posts"),
    User = mongoose.model("Users"),
    Topic = mongoose.model("Topics");

function handleError(err){
  console.log(err);
  return err;
}

function TopicsController(){

  this.index = function(req, res){
    console.log("Index");
    Topic.find({})
    .populate("topic")
    .populate("_user")
    .exec(function(err, topics){
      if(err) console.log("Errors!");
      //console.log(topics);
      res.json(topics);
    });
  };

  this.create = function(req, res){
    console.log("Create");
    //console.log("Dir req");
    //console.log(req.body);
    var topic = new Topic(req.body);
    topic.save(function(error, topic){
      if(error){
        return res.json(error);
      } else if(topic){
        return res.json(topic);
      }
      //console.log(error);
      //console.log(topic);
      //res.json("Topic add success");
    });
  };
}

module.exports = new TopicsController();
