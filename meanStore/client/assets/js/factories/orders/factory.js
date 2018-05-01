console.log("Orders Factory");

app.factory("ordersFactory", ["$http", function($http){

  factory = {};

  var orders = [];
  var order = {};

  function errorCallback(error){
    console.log(error);
  }

  // Index route method...
  factory.index = function(callback){
    //console.log("factory.index() method");
    $http.get("/orders").then(function(response){
      orders = response.data;
      callback(orders);
    });
  };


  factory.create = function(orderInfo, callback){
    console.log("Factory orderInfo");
    console.log(orderInfo);
    $http.post("/orders", orderInfo)
      .then(function(response){
      console.log("Response from creating order");
      console.log(response.data);
      orders.push(response.data);
      //console.log(orders);
      callback(response.data);
    })
      .catch(function(err){
        console.log(err);
    });
    console.log("Return here!");
  };

  factory.getOneOrder = function(id, callback){
    for(var x in orders){
      if(orders[x]._id === id){
        Object.assign(order, orders[x]);
      }
    }
    callback(order);
  };

  // because the order will be selecting a order from existing index on the
  // site, just pull from the index that is loaded into the factory already.
  factory.getOrder = function(id){
    //console.log("getOrder factory");
    //console.log(id);
    //console.log(orders);
    //console.log(typeof (orders));
    for(var i in orders){
      //console.log(orders[i]._id);
      if(orders[i]._id === id){
        order = orders[i];
        //console.log("order from factory");
        //console.log(order);
        return order;
      }
    }
    return "No order";
  };

  return factory;
  

}]);
