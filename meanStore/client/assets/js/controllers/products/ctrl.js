app.controller("mainProductsCtrl", ["$scope", "productsFactory", "$routeParams", function($scope, productsFactory, $routeParams){
  //console.log("Main Products Controller");
  
  $scope.product = {};

  $scope.products = [];
  
  // Get an index of all the products.
  var index = function(){
    productsFactory.index(function(factory_data){
      $scope.products = factory_data;
    });
  };

  index();

  // This addProduct method can be run to add a product to the database
  $scope.addProduct = function(){
    //console.log($scope.product.name);
    productsFactory.create($scope.product);
    $scope.product = {};
  };

  // This addProduct method can be run to add a product to the database
  $scope.deleteProduct = function(_id){
    //console.log("deleteProduct");
    //console.log(_id);
    productsFactory.deleteProduct(_id);
  };
  // This getProduct is used to get one pre-existing product from the factroy
  $scope.getProduct = function(_id){
    $scope.product = productsFactory.getProduct(_id);
  };
  //console.log($scope.products);

  // This updateProduct method is used to update a product object.
  $scope.updateProduct = function(){
    console.log("updateProduct");
    //console.log($routeParams._id);
    $scope.product = $scope.products.find($routeParams.id);
    //console.log($scope.product);
    productsFactory.update($scope.product);
  };

}]);
