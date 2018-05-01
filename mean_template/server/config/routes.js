console.log("Routes");

var mongoose = require("mongoose"),
    path = require("path"),
    BucketLists = require("../controllers/bucketlists.js"),
    Users = require("../controllers/users.js");

module.exports = function(app){
  app.get("/users", Users.index);
  app.post("/users", Users.create);

  app.get("/bucketlists", BucketLists.index);
  app.post("/bucketlists", BucketLists.create);
  app.put("/bucketlists/:id", BucketLists.update);
  app.delete("/bucketlists/:id", BucketLists.delete);
};
