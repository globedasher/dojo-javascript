app.factory("itemsFactory", ["$http", function($http){
  console.log("Items Factory");

  factory = {};

  var items = [];
  var item = {};

  var days = [];
  var day = {};

  function errorCallback(error){
    console.log(error);
  }

  // Index route method...
  // This will his the index route of the backend and return the data from the
  // targeted route.
  factory.index = function(callback){
    console.log("factory.index() method");
    $http.get("/items")
      .then(function(response){
      items = response.data;
      callback(items);
    });
  };

  factory.create = function(itemInfo, userInfo, callback){
    itemInfo._user = userInfo;
    $http.post("/items", itemInfo)
    .then(function(response){
      console.log("Response from creating item");
      console.log(response.data);
      items.push(response.data);
      callback(items);
    })
    .catch(function(err){
      // DONE: move err.data to the controller.
      //console.log(err.data);
      callback(err);
    });
  };


  factory.deleteitem = function(id){
    console.log("factory delete id");
    console.log(id);
    $http.delete("/items/" + id, id)
      .then(function(response){
      //console.log(response.data);
      //console.log("Response from deleteing item");
    })
      .catch(function(err){
        console.log(err);
      });
  };

  factory.getOneitem = function(id, callback){
    for(var x in items){
      if(items[x]._id === id){
        Object.assign(item, items[x]);
      }
    }
    callback(item);
  };

  // because the item will be selecting a item from existing index on the
  // site, just pull from the index that is loaded into the factory already.
  factory.getItem = function(id){
    //console.log("getItem factory");
    //console.log(id);
    //console.log(items);
    //console.log(typeof (items));
    for(var i in items){
      //console.log(items[i]._id);
      if(items[i]._id === id){
        item = items[i];
        //console.log("item from factory");
        //console.log(item);
        return item;
      }
    }
    return "No item";
  };

  factory.update = function(itemObject, id){
    console.log("Update");
    console.log(itemObject);
    //console.log("End of item object");
    //console.log(id);
    $http.put("/items/" + id, itemObject)
      .then(function(response){
        console.log("Response from updating item");
        console.dir(response);
        console.log("~~~~~~~~~~~~~~");
        return itemObject;
      })
      .catch(function(err){
        console.dir(err);
    });
  };

  return factory;
  

}]);
