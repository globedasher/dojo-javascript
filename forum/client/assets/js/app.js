var app = angular.module("app", ["ngRoute", "ngMessages", "ngCookies"]);
app.config(function($routeProvider){
  $routeProvider
  .when("/index", {
    templateUrl: "partials/_home.html",
    controller: "mainTopicsCtrl"
  })
  .when("/topics/:id", {
    templateUrl: "partials/topics/_show.html",
    controller: "editTopicsCtrl"
  })
  .when("/users/new",{
    templateUrl: "partials/users/_reg.html",
    controller: "mainUsersCtrl"
  })
  .when("/users/:id",{
    templateUrl: "partials/users/_show.html",
    controller: "editUsersCtrl"
  })
  .otherwise({
    redirectTo: "/index"
  });
  
});
