var app = angular.module("app", ["ngRoute", "ngMessages", "ngCookies"]);
app.config(function($routeProvider){
  $routeProvider
  .when("/index", {
    templateUrl: "partials/_home.html",
    controller: "mainItemCtrl"
  })
  .when("/dashboard", {
    templateUrl: "partials/dashboard/_index.html",
    controller: "mainItemCtrl"
  })
  .when("/user/:id", {
    templateUrl: "partials/dashboard/_user.html",
    controller: "mainUsersCtrl"
  })
  .otherwise({
    redirectTo: "/index"
  });
  
});
