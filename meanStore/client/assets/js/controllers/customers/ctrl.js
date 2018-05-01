app.controller("mainCustomersCtrl", ["$scope", "customersFactory", "$routeParams", function($scope, customersFactory, $routeParams){
  //console.log("Main Customers Controller");
  
  $scope.customer = {};

  $scope.customers = [];
  
  // Get an index of all the customers.
  var index = function(){
    customersFactory.index(function(factory_data){
      $scope.customers = factory_data;
    });
  };

  index();

  // This addCustomer method can be run to add a customer to the database
  $scope.addCustomer = function(){
    //console.log($scope.customer.name);
    customersFactory.create($scope.customer);
    $scope.customer = {};
  };

  // This addCustomer method can be run to add a customer to the database
  $scope.deleteCustomer = function(_id){
    //console.log("deleteCustomer");
    //console.log(_id);
    customersFactory.deleteCustomer(_id);
  };
  // This getCustomer is used to get one pre-existing customer from the factroy
  $scope.getCustomer = function(_id){
    $scope.customer = customersFactory.getCustomer(_id);
  };
  //console.log($scope.customers);

  // This updateCustomer method is used to update a customer object.
  $scope.updateCustomer = function(){
    console.log("updateCustomer");
    //console.log($routeParams._id);
    $scope.customer = $scope.customers.find($routeParams.id);
    //console.log($scope.customer);
    customersFactory.update($scope.customer);
  };

}]);
