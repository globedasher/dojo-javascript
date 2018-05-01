console.log("Posts Factory");

app.factory("postsFactory", ["$http", function($http){

  factory = {};

  var posts = [];
  var post = {};

  function errorCallback(error){
    console.log(error);
  }

  // Index route method...
  factory.index = function(callback){
    //console.log("factory.index() method");
    $http.get("/posts").then(function(response){
      posts = response.data;
      callback(posts);
    });
  };


  factory.create = function(postInfo, callback){
    console.log("Factory postInfo");
    console.log(postInfo);
    $http.post("/posts", postInfo)
      .then(function(response){
      console.log("Response from creating post");
      console.log(response.data);
      posts.push(response.data);
      //console.log(posts);
      callback(response.data);
    })
      .catch(function(err){
        console.log(err);
    });
    console.log("Return here!");
  };

  factory.getOnePost = function(id, callback){
    for(var x in posts){
      if(posts[x]._id === id){
        Object.assign(post, posts[x]);
      }
    }
    callback(post);
  };

  // because the post will be selecting a post from existing index on the
  // site, just pull from the index that is loaded into the factory already.
  factory.getPost = function(id){
    //console.log("getPost factory");
    //console.log(id);
    //console.log(posts);
    //console.log(typeof (posts));
    for(var i in posts){
      //console.log(posts[i]._id);
      if(posts[i]._id === id){
        post = posts[i];
        //console.log("post from factory");
        //console.log(post);
        return post;
      }
    }
    return "No post";
  };

  return factory;
  

}]);
