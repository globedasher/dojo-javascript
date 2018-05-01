var app = angular.module("app", ["ngRoute", "ngMessages", "ngCookies"]);
app.config(function($routeProvider){
  $routeProvider
  .when("/index", {
    templateUrl: "partials/_home.html",
    controller: "mainBucketListCtrl"
  })
  .when("/dashboard", {
    templateUrl: "partials/dashboard/_index.html",
    controller: "mainBucketListCtrl"
  })
  .when("/user/:id", {
    templateUrl: "partials/dashboard/_user.html",
    controller: "mainUsersCtrl"
  })
  .otherwise({
    redirectTo: "/index"
  });
  
});
