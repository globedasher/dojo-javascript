var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var ejs = require('ejs');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.render('index', { title: 'my Express Project'});
})

app.post('/result', function(req, res){
  //console.log('POST DATA \n \n', req.body);
  res.render('results', { data: req.body });
})


app.listen(8000, function(){
  console.log('Listening on port 8000');
})
