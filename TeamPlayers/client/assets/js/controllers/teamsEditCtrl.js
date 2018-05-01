// Create the index controller and inject any services needed.
app.controller('teamsEditCtrl',['$scope', 'teamFactory', '$routeParams', '$location', function($scope, teamFactory, $routeParams, $location){
  //console.log('Team Edit Controller');
  //console.log($routeParams.id + ' Route Params');
  $scope.team = teamFactory.show($routeParams.id);
  //console.log($scope.team);
  $scope.editTeam = function(){
    //console.log($routeParams.id, $scope.team);
    teamFactory.update($routeParams.id);
    $location.url('/teams');
  };
}]);
