var app = angular.module("app", ["ngRoute", "ngMessages", "ngCookies"]);
app.config(function($routeProvider){
  $routeProvider
  .when("/index", {
    templateUrl: "partials/_home.html",
    controller: "mainUsersCtrl"
  })
  .when("/appointments/new", {
    templateUrl: "partials/appointments/_index.html",
    controller: "mainUsersCtrl"
  })
  .otherwise({
    redirectTo: "/index"
  });
  
});
