app.controller("editProductsCtrl", ["$scope", "productsFactory", "$routeParams", function($scope, productsFactory, $routeParams){
  console.log("Edit Products Controller");

  $scope.products = [];
  $scope.product = {};
  $scope.editProduct = {};

  productsFactory.getOneProduct($routeParams.id, function(returnedData){
    console.log("get One!");
    $scope.product =  returnedData;
    //console.log($scope.product);
    $scope.editProduct = angular.copy($scope.product);
    //console.log($scope.editProduct);

    // Sameness check... 
    // if($scope.editProduct == $scope.product){
    //   console.log("same");
    // }
    // console.log("individual");

    //console.log($scope.product);
  });
  
  // This getProduct is used to get one pre-existing product from the factroy
  productsFactory.getProduct(function(response){
    console.log('controller get product');
    console.log("response! " + response);
    $scope.products = response.data;
  });
  //console.log($scope.products);
  
  // This line invokes the getIndex function that retrieves all the products
  // from the database.
  //$scope.getProduct();

  // This updateProduct method is used to update a product object.
  $scope.updateProduct = function(){
    console.log("updateProduct");
    console.log($routeParams.id);
    console.log($scope.editProduct);
    productsFactory.update($scope.editProduct, $routeParams.id);
    //Object.assign($scope.product, $scope.editProduct);
    $scope.product = angular.copy($scope.editProduct);
  };

}]);
