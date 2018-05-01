app.controller("editCustomersCtrl", ["$scope", "customersFactory", "$routeParams", function($scope, customersFactory, $routeParams){
  console.log("Edit Customers Controller");

  $scope.customers = [];
  $scope.customer = {};
  $scope.editCustomer = {};

  customersFactory.getOneCustomer($routeParams.id, function(returnedData){
    console.log("get One!");
    $scope.customer =  returnedData;
    //console.log($scope.customer);
    $scope.editCustomer = angular.copy($scope.customer);
    //console.log($scope.editCustomer);

    // Sameness check... 
    // if($scope.editCustomer == $scope.customer){
    //   console.log("same");
    // }
    // console.log("individual");

    //console.log($scope.customer);
  });
  
  // This getCustomer is used to get one pre-existing customer from the factroy
  customersFactory.getCustomer(function(response){
    console.log('controller get customer');
    console.log("response! " + response);
    $scope.customers = response.data;
  });
  //console.log($scope.customers);
  
  // This line invokes the getIndex function that retrieves all the customers
  // from the database.
  //$scope.getCustomer();

  // This updateCustomer method is used to update a customer object.
  $scope.updateCustomer = function(){
    console.log("updateCustomer");
    console.log($routeParams.id);
    console.log($scope.editCustomer);
    customersFactory.update($scope.editCustomer, $routeParams.id);
    Object.assign($scope.customer, $scope.editCustomer);
  };

}]);
