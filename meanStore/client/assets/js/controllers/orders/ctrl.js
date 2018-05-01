app.controller("mainOrdersCtrl", ["$scope", "customersFactory", "productsFactory", "ordersFactory", "$routeParams", function($scope, customersFactory, productsFactory, ordersFactory, $routeParams){
  //console.log("Main Orders Controller");
  
  $scope.product = {};
  $scope.products = [];

  $scope.customer = {};
  $scope.customers = [];

  $scope.order = {};
  $scope.orders = [];

  $scope.newOrder = {};
  
  // Get an index of all the orders.
  var index = function(){
    customersFactory.index(function(factory_data){
      $scope.customers = factory_data;
    });
    productsFactory.index(function(factory_data){
      $scope.products = factory_data;
    });
    ordersFactory.index(function(factory_data){
      $scope.orders = factory_data;
    });
  };

  index();

  // This addOrder method can be run to add a order to the database
  $scope.addOrder = function(){
    //console.log("add Order dir");
    //console.dir($scope.order);
    console.log("Controller orderInfo");
    console.log($scope.newOrder);
    ordersFactory.create($scope.newOrder, function(order){
      console.log($scope.orders);

    });
    $scope.newOrder = {};
  };

  // This getOrder is used to get one pre-existing order from the factroy
  $scope.getOrder = function(_id){
    $scope.order = ordersFactory.getOrder(_id);
  };
  //console.log($scope.orders);

  // This updateOrder method is used to update a order object.
  $scope.updateOrder = function(){
    console.log("updateOrder");
    //console.log($routeParams._id);
    $scope.order = $scope.orders.find($routeParams.id);
    //console.log($scope.order);
    ordersFactory.update($scope.order);
  };

}]);
