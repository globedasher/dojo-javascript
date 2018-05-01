/***********************************app.js*************************************
 * This file is intended to be the main server for my MEAN project be the main
 * server for my MEAN project.
 *
 ************************************END**************************************/

var http = require('http');
var fs = require('fs');
var static_contents = require('./static');

server = http.createServer(function (request, response){
  static_contents(request, response);
});
server.listen(8000);
console.log('Server is listening at port 8000');
