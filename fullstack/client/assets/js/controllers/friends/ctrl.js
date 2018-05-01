app.controller("mainFriendsCtrl", ["$scope", "friendsFactory", "$routeParams", function($scope, friendsFactory, $routeParams){
  //console.log("Main Friends Controller");
  
  $scope.friend = {};

  $scope.friends = [];
  
  // Get an index of all the friends.
  var index = function(){
    friendsFactory.index(function(factory_data){
      $scope.friends = factory_data;
    });
  };

  index();

  // This addFriend method can be run to add a friend to the database
  $scope.addFriend = function(){
    //console.log($scope.friend.name);
    friendsFactory.create($scope.friend);
    $scope.friend = {};
  };

  // This addFriend method can be run to add a friend to the database
  $scope.deleteFriend = function(_id){
    //console.log("deleteFriend");
    //console.log(_id);
    friendsFactory.deleteFriend(_id);
  };
  // This getFriend is used to get one pre-existing friend from the factroy
  $scope.getFriend = function(_id){
    $scope.friend = friendsFactory.getFriend(_id);
  };
  //console.log($scope.friends);

  // This updateFriend method is used to update a friend object.
  $scope.updateFriend = function(){
    console.log("updateFriend");
    //console.log($routeParams._id);
    $scope.friend = $scope.friends.find($routeParams.id);
    //console.log($scope.friend);
    friendsFactory.update($scope.friend);
  };

}]);
