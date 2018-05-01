app.controller("editUsersCtrl", ["$scope", "usersFactory", "$routeParams", function($scope, usersFactory, $routeParams){
  console.log("Edit Users Controller");

  $scope.users = [];
  $scope.user = {};
  $scope.editUser = {};

  usersFactory.getOneUser($routeParams.id, function(returnedData){
    console.log("get One!");
    $scope.user =  returnedData;
    //console.log($scope.user);
    $scope.editUser = angular.copy($scope.user);
    //console.log($scope.editUser);

    // Sameness check... 
    // if($scope.editUser == $scope.user){
    //   console.log("same");
    // }
    // console.log("individual");

    //console.log($scope.user);
  });
  
  // This getUser is used to get one pre-existing user from the factroy
  usersFactory.getUser(function(response){
    console.log('controller get user');
    console.log("response! " + response);
    $scope.users = response.data;
  });
  //console.log($scope.users);
  
  // This line invokes the getIndex function that retrieves all the users
  // from the database.
  //$scope.getUser();

  // This updateUser method is used to update a user object.
  $scope.updateUser = function(){
    console.log("updateUser");
    console.log($routeParams.id);
    console.log($scope.editUser);
    usersFactory.update($scope.editUser, $routeParams.id);
    Object.assign($scope.user, $scope.editUser);
  };

}]);
