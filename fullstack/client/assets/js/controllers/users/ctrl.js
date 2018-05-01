app.controller("mainUsersCtrl", ["$scope", "usersFactory", "$routeParams", function($scope, usersFactory, $routeParams){
  //console.log("Main Users Controller");
  
  $scope.user = {};

  $scope.users = [];
  
  // Get an index of all the users.
  var index = function(){
    usersFactory.index(function(factory_data){
      $scope.users = factory_data;
    });
  };

  index();

  // This addUser method can be run to add a user to the database
  $scope.addUser = function(){
    //console.log($scope.user.name);
    usersFactory.create($scope.user);
    $scope.user = {};
  };

  // This addUser method can be run to add a user to the database
  $scope.deleteUser = function(_id){
    //console.log("deleteUser");
    //console.log(_id);
    usersFactory.deleteUser(_id);
  };
  // This getUser is used to get one pre-existing user from the factroy
  $scope.getUser = function(_id){
    $scope.user = usersFactory.getUser(_id);
  };
  //console.log($scope.users);

  // This updateUser method is used to update a user object.
  $scope.updateUser = function(){
    console.log("updateUser");
    //console.log($routeParams._id);
    $scope.user = $scope.users.find($routeParams.id);
    //console.log($scope.user);
    usersFactory.update($scope.user);
  };

}]);
