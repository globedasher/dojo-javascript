// Create the index controller and inject any services needed.
app.controller('assnCtrl',['$scope', 'playerFactory', 'teamFactory', function($scope, playerFactory, teamFactory){
  $scope.players = playerFactory.index();
  //console.log($scope.players);
  $scope.teams = teamFactory.index();
  //console.log($scope.teams);
  $scope.newAssn = {};
  $scope.addAssn = function(){
    console.log('Add Association');
    // Code for adding associations here...
    console.log($scope.newAssn);
    playerFactory.addTeam($scope.newAssn);
    teamFactory.addPlayer($scope.newAssn);
  };
}]);
