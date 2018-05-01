/******************server.js******************
 *
 * This is my server.js file that will start an http server and respond to
 * requests
 ********************END*********************/

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
  console.log('client request URL: ', request.url);
  if(request.url === "/cars"){
    fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
      response.end(contents);
    });
  }
  if(request.url === "/cars/new"){
    fs.readFile('./views/new_car.html', 'utf8', function(errors, contents){
      response.end(contents);
    });
  }
  if(request.url === "/cats"){
    fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
      response.end(contents);
    });
  }
  if(request.url === "/main.css"){
    fs.readFile('./stylesheets/main.css', 'utf8', function(errors, contents){
      response.writeHead(200, { 'Content-type': 'text/css' });
      response.write(contents);
      response.end();
    });
  }
  if(request.url === "/main.js"){
    fs.readFile('./js/main.js', 'utf8', function(errors, contents){
      response.writeHead(200, { 'Content-type': 'text/javascript' });
      response.write(contents);
      response.end();
    });
  }
  if(request.url === "/car1.jpg"){
    fs.readFile('./img/car1.jpg', function(errors, contents){
      response.writeHead(200, { 'Content-type': 'image/jpg' });
      response.write(contents);
      response.end();
    });
  }
  if(request.url === "/car2.jpg"){
    fs.readFile('./img/car2.jpg', function(errors, contents){
      response.end(contents);
    });
  }
  if(request.url === "/car3.jpg"){
    fs.readFile('./img/car3.jpg', function(errors, contents){
      response.end(contents);
    });
  }
  if(request.url === "/car4.jpg"){
    fs.readFile('./img/car4.jpg', function(errors, contents){
      response.end(contents);
    });
  }
  if(request.url === "/cat1.jpg"){
    fs.readFile('./img/cat1.jpg', function(errors, contents){
      response.end(contents);
    });
  }
  if(request.url === "/cat2.jpg"){
    fs.readFile('./img/cat2.jpg', function(errors, contents){
      response.end(contents);
    });
  }
  if(request.url === "/cat3.jpg"){
    fs.readFile('./img/cat3.jpg', function(errors, contents){
      response.end(contents);
    });
  }
  if(request.url === "/cat4.jpg"){
    fs.readFile('./img/cat4.jpg', function(errors, contents){
      response.end(contents);
    });
  }
  if(request.url === '/'){
    fs.readFile('./views/error.html', 'utf8', function(errors, contents){
      response.end(contents);
    });
  }
  if(request.url.search('/n+')){
    fs.readFile('./views/error.html', 'utf8', function(errors, contents){
      response.end(contents);
    });
  }
});

server.listen(7070);
