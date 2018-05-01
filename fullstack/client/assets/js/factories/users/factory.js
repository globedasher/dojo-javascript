console.log("Users Factory");

app.factory("usersFactory", ["$http", function($http){

  factory = {};

  var users = [];
  var user = {};

  function errorCallback(error){
    console.log(error);
  }

  // Index route method...
  factory.index = function(callback){
    //console.log("factory.index() method");
    $http.get("/users").then(function(response){
      users = response.data;
      callback(users);
    });
  };


  factory.create = function(userInfo){
    console.log("userInfo");
    //console.log(userInfo);
    $http.post("/users", userInfo)
      .then(function(response){
      console.log("Response from creating user");
      console.log(response.data);
      users.push(response.data);
    })
      .catch(function(err){
        console.log(err);
    });
  };

  factory.deleteUser = function(id){
    //console.log("factory delete id");
    //console.log(id);
    $http.delete("/users/" + id, id).then(function(response){
      //console.log(response.data);
      //console.log("Response from deleteing user");
    });
  };

  factory.getOneUser = function(id, callback){
    for(var x in users){
      if(users[x]._id === id){
        Object.assign(user, users[x]);
      }
    }
    callback(user);
  };

  // because the user will be selecting a user from existing index on the
  // site, just pull from the index that is loaded into the factory already.
  factory.getUser = function(id){
    //console.log("getUser factory");
    //console.log(id);
    //console.log(users);
    //console.log(typeof (users));
    for(var i in users){
      //console.log(users[i]._id);
      if(users[i]._id === id){
        user = users[i];
        //console.log("user from factory");
        //console.log(user);
        return user;
      }
    }
    return "No user";
  };

  factory.update = function(userObject, id){
    console.log("Update");
    //console.log(userObject);
    //console.log("End of user object");
    //console.log(id);
    $http.put("/users/" + id, userObject)
      .then(function(response){
        console.log("Response from updating user");
        console.dir(response);
        console.log("~~~~~~~~~~~~~~");
      })
      .catch(function(err){
        console.dir(err);
    });
  };

  return factory;
  

}]);
