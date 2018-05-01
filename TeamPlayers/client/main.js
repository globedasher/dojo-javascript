console.log('main.js');
var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/players',{
    templateUrl: 'partials/_players.html',
    controller: 'playersCtrl'
  })
  .when('/player/:id',{
    templateUrl: 'partials/_playerEdit.html',
    controller: 'playersEditCtrl'
  })
  .when('/teams',{
    templateUrl: 'partials/_teams.html',
    controller: 'teamsCtrl'
  })
  .when('/team/:id',{
    templateUrl: 'partials/_teamEdit.html',
    controller: 'teamsEditCtrl'
  })
  .when('/assn',{
    templateUrl: 'partials/_assn.html',
    controller: 'assnCtrl'
  })
  .otherwise({
    redirectTo: '/players'
  });
});
