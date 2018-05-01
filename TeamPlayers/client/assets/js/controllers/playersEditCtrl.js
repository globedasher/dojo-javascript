// Create the index controller and inject any services needed.
app.controller('playersEditCtrl',['$scope', 'playerFactory', '$routeParams', '$location', function($scope, playerFactory, $routeParams, $location){
  //console.log('Player Edit Controller');
  //console.log($routeParams.id + ' Route Params');
  $scope.player = playerFactory.show($routeParams.id);
  //console.log($scope.player);
  $scope.editPlayer = function(){
    //console.log($routeParams.id, $scope.player);
    playerFactory.update($routeParams.id);
    $location.url('/players');
  };
}]);
