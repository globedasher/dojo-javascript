app.controller("editFriendsCtrl", ["$scope", "friendsFactory", "$routeParams", function($scope, friendsFactory, $routeParams){
  console.log("Edit Friends Controller");

  $scope.friends = [];
  $scope.friend = {};
  $scope.editFriend = {};

  friendsFactory.getOneFriend($routeParams.id, function(returnedData){
    console.log("get One!");
    $scope.friend =  returnedData;
    //console.log($scope.friend);
    $scope.editFriend = angular.copy($scope.friend);
    //console.log($scope.editFriend);

    // Sameness check... 
    // if($scope.editFriend == $scope.friend){
    //   console.log("same");
    // }
    // console.log("individual");

    //console.log($scope.friend);
  });
  
  // This getFriend is used to get one pre-existing friend from the factroy
  friendsFactory.getFriend(function(response){
    console.log('controller get friend');
    console.log("response! " + response);
    $scope.friends = response.data;
  });
  //console.log($scope.friends);
  
  // This line invokes the getIndex function that retrieves all the friends
  // from the database.
  //$scope.getFriend();

  // This updateFriend method is used to update a friend object.
  $scope.updateFriend = function(){
    console.log("updateFriend");
    console.log($routeParams.id);
    console.log($scope.editFriend);
    friendsFactory.update($scope.editFriend, $routeParams.id);
    //Object.assign($scope.friend, $scope.editFriend);
    $scope.friend = angular.copy($scope.editFriend);
  };

}]);
