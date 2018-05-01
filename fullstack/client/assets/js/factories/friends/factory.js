console.log("Friends Factory");

app.factory("friendsFactory", ["$http", function($http){

  factory = {};

  var friends = [];
  var friend = {};

  function errorCallback(error){
    console.log(error);
  }

  // Index route method...
  factory.index = function(callback){
    //console.log("factory.index() method");
    $http.get("/friends").then(function(response){
      friends = response.data;
      callback(friends);
    });
  };


  factory.create = function(friendInfo){
    console.log("friendInfo");
    //console.log(friendInfo);
    $http.post("/friends", friendInfo)
      .then(function(response){
      console.log("Response from creating friend");
      console.log(response.data);
      friends.push(response.data);
    })
      .catch(function(err){
        console.log(err);
    });
  };

  factory.deleteFriend = function(id){
    //console.log("factory delete id");
    //console.log(id);
    $http.delete("/friends/" + id, id).then(function(response){
      //console.log(response.data);
      //console.log("Response from deleteing friend");
    });
  };

  factory.getOneFriend = function(id, callback){
    for(var x in friends){
      if(friends[x]._id === id){
        Object.assign(friend, friends[x]);
      }
    }
    callback(friend);
  };

  // because the user will be selecting a friend from existing index on the
  // site, just pull from the index that is loaded into the factory already.
  factory.getFriend = function(id){
    //console.log("getFriend factory");
    //console.log(id);
    //console.log(friends);
    //console.log(typeof (friends));
    for(var i in friends){
      //console.log(friends[i]._id);
      if(friends[i]._id === id){
        friend = friends[i];
        //console.log("friend from factory");
        //console.log(friend);
        return friend;
      }
    }
    return "No friend";
  };

  factory.update = function(friendObject, id){
    //console.log("Update");
    //console.log(friendObject);
    //console.log("End of friend object");
    //console.log(id);
    $http.put("/friends/" + id, friendObject).then(function(response){
      //console.log(response.data);
      //console.log("Response from creating friend");
    });
  };

  return factory;
  

}]);
