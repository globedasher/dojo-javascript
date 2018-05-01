var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var ejs = require('ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotes');

var QuoteSchema = new mongoose.Schema({
  first_name: { type: String, required: true, minLength: 2 },
  last_name: { type: String, required: true, minLength: 2 },
  quote: { type: String, required: true, minLength: 2 },
}, {timestamps: true});

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

// Display the index page
app.get('/', function(req, res){
  var err;
  res.render('index', { err: err });
})

// Show a form to create a new Quote
app.get('/quotes', function(req, res){
  Quote.find({}, function(err, quotes){
    if(err){
      //console.log('error with retrieveal');
    }else{
      //console.log('retrieval!');
      //console.log(quotes);
      res.render('show', { quotes: quotes });
    }
  })
})

// Create a new Quote
app.post('/quotes', function(req, res){
  //console.log('POST DATA', req.body);
  var quote = new Quote({first_name: req.body.first_name, last_name: req.body.last_name, quote: req.body.quote});
  quote.save(function(err){
    if(err){
      console.log('something went wrong');
      //console.log(quote.errors);
      res.render('index', { errors: quote.errors });
    }else{
      //console.log('something went right');
      res.redirect('/quotes');
    }
  });
})

app.listen('8000', function(){
  console.log('Server listening on port 8000');
});
