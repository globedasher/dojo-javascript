var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var ejs = require('ejs');


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/board');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

var postSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minlength: 4 },
  text: { type: String, required: true, minlength: 4 },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

mongoose.model('Post', postSchema);
var Post = mongoose.model('Post');


var commentSchema = new mongoose.Schema({
  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
  firstName: { type: String, required: true, minlength: 4 },
  text: { type: String, required: true, minlength: 4 },
}, {timestamps: true});

mongoose.model('Comment', commentSchema);
var Comment = mongoose.model('Comment');


app.get('/', function(req, res){
  Post.find({})
  .populate('comments')
  .exec(function(err, posts){
    if(err){
      //console.log('error with retrieveal');
    }else{
      //console.log('retrieval!');
      //console.log(posts);
      res.render('index', { posts: posts });
    }
  });
});


// Create new Post all Posts
app.post('/post', function(req, res){
  var post = new Post(req.body);
  post.save(function(err){
    if(err){
      console.log('something went wrong with the post!');
      Post.find({})
      .populate('comments')
      .exec(function(err, posts){
        if(err){
          //console.log('error with retrieveal');
        }else{
          //console.log('retrieval!');
          //console.log(posts);
          res.render('index', { posts: posts, post_errors: post.errors });
        }
      });
    }else{
      res.redirect('/');
    }
  });
});

app.post('/post/:id', function (req, res){
  Post.findOne({_id: req.params.id}, function(err, post){
    // data from form on the front end
    var comment = new Comment(req.body);
    //  set the reference like this:
    comment._post = post._id;
    // now save both to the DB
    comment.save(function(err){
      if(err) {
        console.log('something went wrong with the comment!');
        Post.find({})
        .populate('comments')
        .exec(function(err, posts){
          if(err){
            //console.log('error with retrieveal');
          }else{
            //console.log('retrieval!');
            //console.log(posts);
            res.render('index', { posts: posts, comment_errors: comment.errors });
          }
        });
      }else{
        post.comments.push(comment);
        post.save(function(err){
          if(err) {
            console.log('something went wrong with the post!');
            res.render('index', {title: 'you have errors!', errors: post.errors});
          } else {
            res.redirect('/');
          }
        });
      }
    });
  });
});

app.post('/destroy', function(req, res){
  Post.remove({}, function(err){
    if(err) {
      console.log('Error');
    } else {
      res.redirect('/');
    }
  });
});

app.listen('8000', function(){
  console.log('Server listening on port 8000');
});
