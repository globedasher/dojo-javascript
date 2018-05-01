console.log("Mongoose.js");

var mongoose = require("mongoose"),
    fs = require("fs"),
    path = require("path"),
    models_path = path.resolve("server", "models"),
    reg = new RegExp(".js$", "i"),
    dbURI = "mongodb://localhost/template";

mongoose.connect(dbURI);

// Log a message when connection to mongodb is established.
mongoose.connection.on("connected", function(){
  console.log("Connected to " + dbURI);
});

// If there is an error upon connection to mongodb, log the error.
mongoose.connection.on("error", function(err){
  console.log("Database connection error: " + err);
});

// When disconnecting from mongodb, print a message.
mongoose.connection.on("disconnected", function(){
  console.log("Mongoose default connection closed");
});

// If Node ends, close the Mongoose connection.
process.on("SIGINT", function(){
  mongoose.connection.close(function(){
    console.log("Mongoose default connection closed through app termination.");
    process.exit(0);
  });
});

// Read each file in the models path, if the file is JavaScript, require
// the file.
fs.readdirSync(models_path).forEach(function(file){
  if(reg.test(file)){
    require(path.resolve(models_path, file));
  }
});
