console.log("Server");

var express = require("express"),
    bp = require("body-parser"),
    path = require("path");

require("./server/config/mongoose.js");

var app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use(express.static(path.resolve("client")));
app.use(express.static(path.resolve("bower_components")));

require("./server/config/routes.js")(app);

app.listen(8000, function(){
  console.log("listening");
});
