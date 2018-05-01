console.log("Comments Factory");

app.factory("commentsFactory", ["$http", function($http){

  factory = {};

  var comments = [];
  var comment = {};

  function errorCallback(error){
    console.log(error);
  }

  // Index route method...
  factory.index = function(callback){
    //console.log("factory.index() method");
    $http.get("/comments").then(function(response){
      comments = response.data;
      callback(comments);
    });
  };


  factory.create = function(commentInfo){
    console.log("commentInfo");
    //console.log(commentInfo);
    $http.post("/comments", commentInfo)
      .then(function(response){
      console.log("Response from creating comment");
      console.log(response.data);
      comments.push(response.data);
    })
      .catch(function(err){
        console.log(err);
    });
  };

  factory.deleteComment = function(id){
    //console.log("factory delete id");
    //console.log(id);
    $http.delete("/comments/" + id, id).then(function(response){
      //console.log(response.data);
      //console.log("Response from deleting comment");
    });
  };

  factory.getOneComment = function(id, callback){
    for(var x in comments){
      if(comments[x]._id === id){
        Object.assign(comment, comments[x]);
      }
    }
    callback(comment);
  };

  // because the user will be selecting a comment from existing index on the
  // site, just pull from the index that is loaded into the factory already.
  factory.getComment = function(id){
    //console.log("getComment factory");
    //console.log(id);
    //console.log(comments);
    //console.log(typeof (comments));
    for(var i in comments){
      //console.log(comments[i]._id);
      if(comments[i]._id === id){
        comment = comments[i];
        //console.log("comment from factory");
        //console.log(comment);
        return comment;
      }
    }
    return "No comment";
  };

  factory.update = function(commentObject, id){
    //console.log("Update");
    //console.log(commentObject);
    //console.log("End of comment object");
    //console.log(id);
    $http.put("/comments/" + id, commentObject).then(function(response){
      //console.log(response.data);
      //console.log("Response from creating comment");
    });
  };

  return factory;
  

}]);
