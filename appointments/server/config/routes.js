console.log("Routes");

var mongoose = require("mongoose"),
    path = require("path"),
    Appointments = require("../controllers/appointments.js"),
    Users = require("../controllers/users.js");

module.exports = function(app){
  app.get("/users", Users.index);
  app.post("/users", Users.create);

  app.get("/appointments", Appointments.index);
  app.post("/appointments", Appointments.create);
  app.delete("/appointments/:id", Appointments.delete);
};
