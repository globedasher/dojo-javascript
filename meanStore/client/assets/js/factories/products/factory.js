console.log("Products Factory");

app.factory("productsFactory", ["$http", function($http){

  factory = {};

  var products = [];
  var product = {};

  function errorCallback(error){
    console.log(error);
  }

  // Index route method...
  factory.index = function(callback){
    //console.log("factory.index() method");
    $http.get("/products").then(function(response){
      products = response.data;
      callback(products);
    });
  };


  factory.create = function(productInfo){
    console.log("productInfo");
    //console.log(productInfo);
    $http.post("/products", productInfo)
      .then(function(response){
      console.log("Response from creating product");
      console.log(response.data);
      products.push(response.data);
    })
      .catch(function(err){
        console.log(err);
    });
  };

  factory.deleteProduct = function(id){
    //console.log("factory delete id");
    //console.log(id);
    $http.delete("/products/" + id, id).then(function(response){
      //console.log(response.data);
      //console.log("Response from deleteing product");
    });
  };

  factory.getOneProduct = function(id, callback){
    for(var x in products){
      if(products[x]._id === id){
        Object.assign(product, products[x]);
      }
    }
    callback(product);
  };

  // because the user will be selecting a product from existing index on the
  // site, just pull from the index that is loaded into the factory already.
  factory.getProduct = function(id){
    //console.log("getProduct factory");
    //console.log(id);
    //console.log(products);
    //console.log(typeof (products));
    for(var i in products){
      //console.log(products[i]._id);
      if(products[i]._id === id){
        product = products[i];
        //console.log("product from factory");
        //console.log(product);
        return product;
      }
    }
    return "No product";
  };

  factory.update = function(productObject, id){
    //console.log("Update");
    //console.log(productObject);
    //console.log("End of product object");
    //console.log(id);
    $http.put("/products/" + id, productObject).then(function(response){
      //console.log(response.data);
      //console.log("Response from creating product");
    });
  };

  return factory;
  

}]);
