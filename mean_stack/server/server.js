/******************server.js******************
 *
 * This is my server.js file that will start an http server and respond to
 * requests
 ********************END*********************/

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
  console.log('client request URL: ', request.url);
  if(request.url === "/"){
    fs.readFile('index.html', 'utf8', function(errors, contents){
      response.end(contents);
    });
  }
  if(request.url === "/main.css"){
    fs.readFile('./stylesheets/main.css', 'utf8', function(errors, contents){
      response.end(contents);
    });
  }
  if(request.url === "/main.js"){
    fs.readFile('./js/main.js', 'utf8', function(errors, contents){
      response.end(contents);
    });
  }
  if(request.url === "/source.jpg"){
    fs.readFile('./img/source.jpg', function(errors, contents){
      response.end(contents);
    });
  }
});

server.listen(8000);
