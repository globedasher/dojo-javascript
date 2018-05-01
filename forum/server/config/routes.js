console.log("Routes");

var mongoose = require("mongoose"),
    path = require("path"),
    Comments = require("../controllers/comments.js");
    Users = require("../controllers/users.js");
    Posts = require("../controllers/posts.js");
    Topics = require("../controllers/topics.js");

module.exports = function(app){
  app.get("/comments", Comments.index);
  app.post("/comments", Comments.create);
  app.get("/comments/:id", Comments.show);
  app.put("/comments/:id", Comments.update);
  app.delete("/comments/:id", Comments.delete);

  app.get("/topics", Topics.index);
  app.post("/topics", Topics.create);

  app.get("/users", Users.index);
  app.post("/users", Users.create);
  app.get("/users/:id", Users.show);
  app.put("/users/:id", Users.update);
  app.delete("/users/:id", Users.delete);

  app.get("/posts", Posts.index);
  app.post("/posts", Posts.create);
  app.get("/posts/:id", Users.show);
  app.put("/posts/:id", Users.update);
  app.delete("/posts/:id", Users.delete);

};
