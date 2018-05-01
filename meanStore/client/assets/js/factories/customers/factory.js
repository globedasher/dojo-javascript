console.log("Customers Factory");

app.factory("customersFactory", ["$http", function($http){

  factory = {};

  var customers = [];
  var customer = {};

  function errorCallback(error){
    console.log(error);
  }

  // Index route method...
  factory.index = function(callback){
    //console.log("factory.index() method");
    $http.get("/customers").then(function(response){
      customers = response.data;
      callback(customers);
    });
  };


  factory.create = function(customerInfo){
    console.log("customerInfo");
    //console.log(customerInfo);
    $http.post("/customers", customerInfo)
      .then(function(response){
      console.log("Response from creating customer");
      console.log(response.data);
      customers.push(response.data);
    })
      .catch(function(err){
        console.log(err);
    });
  };

  factory.deleteCustomer = function(id){
    //console.log("factory delete id");
    //console.log(id);
    $http.delete("/customers/" + id, id).then(function(response){
      //console.log(response.data);
      //console.log("Response from deleteing customer");
    });
  };

  factory.getOneCustomer = function(id, callback){
    for(var x in customers){
      if(customers[x]._id === id){
        Object.assign(customer, customers[x]);
      }
    }
    callback(customer);
  };

  // because the customer will be selecting a customer from existing index on the
  // site, just pull from the index that is loaded into the factory already.
  factory.getCustomer = function(id){
    //console.log("getCustomer factory");
    //console.log(id);
    //console.log(customers);
    //console.log(typeof (customers));
    for(var i in customers){
      //console.log(customers[i]._id);
      if(customers[i]._id === id){
        customer = customers[i];
        //console.log("customer from factory");
        //console.log(customer);
        return customer;
      }
    }
    return "No customer";
  };

  factory.update = function(customerObject, id){
    console.log("Update");
    //console.log(customerObject);
    //console.log("End of customer object");
    //console.log(id);
    $http.put("/customers/" + id, customerObject)
      .then(function(response){
        console.log("Response from updating customer");
        console.dir(response);
        console.log("~~~~~~~~~~~~~~");
      })
      .catch(function(err){
        console.dir(err);
    });
  };

  return factory;
  

}]);
