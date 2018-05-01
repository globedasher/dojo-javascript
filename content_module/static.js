/*********************************static.js************************************
 * This file is intended to serve up static files for this MEAN project.
 *
 ************************************END**************************************/

var fs = require('fs');
var reHtml = new RegExp(/.html/);
var reCss = new RegExp(/.css/);
var reImg = new RegExp(/.jpg/);

module.exports = function(request, response){
  if (request.url === '/'){
    response.writeHead(200, {'Content-type': 'text/html'});
    fs.readFile('views/index.html', 'utf8', function (errors, contents){
      response.write(contents); 
      response.end();
    });
  } else if(request.url.match(reHtml)){
    fs.readFile(`views/${request.url}`, 'utf8', function (errors, contents){
      response.write(contents);
      response.end();
    });
  } else if(request.url.match(reCss)){
    fs.readFile(`stylesheets/${request.url}`, 'utf8', function (errors, contents){
      response.write(contents);
      response.end();
    });
  } else if(request.url.match(reImg)){
    fs.readFile(`img/${request.url}`, function (errors, contents){
      response.write(contents);
      response.end();
    });
  } else {
    fs.readFile('views/error.html', 'utf8', function (errors, contents){
      response.write(contents);
      response.end();
    });
  }
};
