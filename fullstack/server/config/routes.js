console.log("Routes");

var mongoose = require("mongoose"),
    path = require("path"),
    Friends = require("../controllers/friends.js");
    Users = require("../controllers/users.js");

module.exports = function(app){
  app.get("/friends", Friends.index);
  app.post("/friends", Friends.create);
  app.get("/friends/:id", Friends.show);
  app.put("/friends/:id", Friends.update);
  app.delete("/friends/:id", Friends.delete);

  app.get("/users", Users.index);
  app.post("/users", Users.create);
  app.get("/users/:id", Users.show);
  app.put("/users/:id", Users.update);
  app.delete("/users/:id", Users.delete);

};
