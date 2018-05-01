// Create the index controller and inject any services needed.
app.controller('teamsCtrl',['$scope', 'teamFactory', '$location', function($scope, teamFactory, $location){
  //console.log('Team Controller');
  $scope.teams = teamFactory.index();
  //console.log($scope.teams);
  $scope.addTeam = function(){
    teamFactory.addTeam($scope.newTeam);
    $scope.newTeam = {};
  };
  $scope.destroy = function(id){
    //console.log('destroy');
    teamFactory.destroy(id);
    $location.url('/teams');
  };
}]);
