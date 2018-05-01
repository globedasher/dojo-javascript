var app = angular.module("fullstack", ["ngRoute", "ngMessages"]);
app.config(function($routeProvider){
  $routeProvider
  .when("/index", {
    templateUrl: "partials/_home.html",
  })
  .when("/friends",{
    templateUrl: "partials/friends/_index.html",
    controller: "mainFriendsCtrl"
  })
  .when("/friends/new",{
    templateUrl: "partials/friends/_new.html",
    controller: "mainFriendsCtrl"
  })
  .when("/friends/:id/edit",{
    templateUrl: "partials/friends/_edit.html",
    controller: "editFriendsCtrl"
  })
  .when("/friends/:id",{
    templateUrl: "partials/friends/_show.html",
    controller: "editFriendsCtrl"
  })
  .when("/users",{
    templateUrl: "partials/users/_index.html",
    controller: "mainUsersCtrl"
  })
  .when("/users/new",{
    templateUrl: "partials/users/_reg.html",
    controller: "mainUsersCtrl"
  })
  .when("/users/:id/edit",{
    templateUrl: "partials/users/_edit.html",
    controller: "editUsersCtrl"
  })
  .when("/users/:id",{
    templateUrl: "partials/users/_show.html",
    controller: "editUsersCtrl"
  })
  .otherwise({
    redirectTo: "/index"
  });
  
});
