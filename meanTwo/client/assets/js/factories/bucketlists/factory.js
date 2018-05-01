app.factory("bucketListsFactory", ["$http", function($http){
  console.log("BucketLists Factory");

  factory = {};

  var bucketLists = [];
  var bucketList = {};

  var days = [];
  var day = {};

  function errorCallback(error){
    console.log(error);
  }

  // Index route method...
  // This will his the index route of the backend and return the data from the
  // targeted route.
  factory.index = function(callback, id){
    console.log("factory.index() method");
    console.log(id);
    $http.get("/bucketLists/" + id, id)
      .then(function(response){
      bucketLists = response.data;
      callback(bucketLists);
    });
  };


  factory.create = function(bucketListInfo, userInfo, callback){
    //console.log("bucketListInfo");
    //console.log(bucketListInfo);
    bucketListInfo._user = userInfo;
    //console.log("userInfo");
    //console.log(userInfo);
    //console.log("bucketListInfo");
    //console.log(bucketListInfo);
    $http.post("/bucketLists", bucketListInfo)
    .then(function(response){
      console.log("Response from creating bucketList");
      bucketLists.push(response.data);
      callback(bucketLists);
    })
    .catch(function(err){
      // DONE: move err.data to the controller.
      //console.log(err.data);
      callback(err);
    });
  };


  factory.deleteBucketList = function(id){
    console.log("factory delete id");
    console.log(id);
    $http.delete("/bucketLists/" + id, id)
      .then(function(response){
      //console.log(response.data);
      //console.log("Response from deleteing bucketList");
    })
      .catch(function(err){
        console.log(err);
      });
  };

  factory.getOneBucketList = function(id, callback){
    for(var x in bucketLists){
      if(bucketLists[x]._id === id){
        Object.assign(bucketList, bucketLists[x]);
      }
    }
    callback(bucketList);
  };

  // because the bucketList will be selecting a bucketList from existing index on the
  // site, just pull from the index that is loaded into the factory already.
  factory.getBucketList = function(id){
    //console.log("getBucketList factory");
    //console.log(id);
    //console.log(bucketLists);
    //console.log(typeof (bucketLists));
    for(var i in bucketLists){
      //console.log(bucketLists[i]._id);
      if(bucketLists[i]._id === id){
        bucketList = bucketLists[i];
        //console.log("bucketList from factory");
        //console.log(bucketList);
        return bucketList;
      }
    }
    return "No bucketList";
  };

  factory.update = function(id){
    console.log("Update");
    console.log(id);
    //console.log("End of bucketList object");
    //console.log(id);
    $http.put("/bucketlists", id)
      .then(function(response){
        console.log("Response from updating bucketList");
        console.dir(response);
        console.log("~~~~~~~~~~~~~~");
        return response;
      })
      .catch(function(err){
        console.dir(err);
    });
  };

  return factory;
  

}]);
