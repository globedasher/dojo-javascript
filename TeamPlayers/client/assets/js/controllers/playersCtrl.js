// Create the index controller and inject any services needed.
app.controller('playersCtrl',['$scope', 'playerFactory', '$location', function($scope, playerFactory, $location){
  //console.log('Player Controller');
  $scope.players = playerFactory.index();
  //console.log($scope.players);
  $scope.addPlayer = function(){
    playerFactory.addPlayer($scope.newPlayer);
    $scope.newPlayer = {};
  };
  $scope.destroy = function(id){
    //console.log('destroy');
    playerFactory.destroy(id);
    $location.url('/players');
  };
}]);
