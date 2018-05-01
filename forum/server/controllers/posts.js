console.log("PostsController");

var mongoose = require("mongoose"),
    path = require("path"),
    bp = require("body-parser"),
    Post = mongoose.model("Posts"),
    User = mongoose.model("Users"),
    Comment = mongoose.model("Comments");

function handleError(err){
  console.log(err);
  return err;
}

function PostsController(){

  this.index = function(req, res){
    console.log("Index");
    Post.find({})
    .populate("comment")
    .populate("_user")
    .exec(function(err, posts){
      if(err) console.log("Errors!");
      //console.log(posts);
      res.json(posts);
    });
  };

  this.create = function(req, res){
    console.log("Create");
    //console.log("Dir req");
    //console.log(req.body);
    var post = new Post(req.body);
    post.save(function(error, post){
      if(error){
        return res.json(error);
      } else if(post){
        return res.json(post);
      }
      //console.log(error);
      //console.log(post);
      //res.json("Post add success");
    });
  };
  
  // this.create = function(req, res){
  //   console.log("Create");
  //   
  //   //console.log("log req.body");
  //   //console.dir(req.body);

  //   //console.log(req.body.user_id);
  //   //console.log(req.body.comment_id);

  //   //console.log("Log 0");
  //   User.findOne({_id: req.body._user}, function(err, user){
  //     if(err){
  //       console.log(err);
  //       res.json(err);
  //     }
  //     Comment.findById(req.body.comment, function(err, comment){
  //       if(err){
  //         console.log(err);
  //         res.json(err);
  //       }
  //       //console.log(user.name);
  //       //console.log(user.posts);
  //       //console.log("Log 1");
  //       console.log("Req.body!");
  //       console.log(req.body);
  //       var post = new Post(req.body);
  //       console.log(typeof (post));
  //       //console.dir(post);
  //       post.save(function(err){
  //         if(err){
  //           console.log("Save Error");
  //         }
  //         user.posts.push(post);
  //         user.save(function(err){
  //           //console.log("Log 2");
  //           if(err){
  //             console.log("Error!");
  //           }else{
  //             post.comment = comment;
  //             post._user = user;
  //             console.log(post);
  //             res.json(post);
  //           }
  //         });
  //       });
  //     });
  //   });
  // };
}

module.exports = new PostsController();
