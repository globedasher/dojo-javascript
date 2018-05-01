var app = angular.module("fullstack", ["ngRoute", "ngMessages"]);
app.config(function($routeProvider){
  $routeProvider
  .when("/index", {
    templateUrl: "partials/_home.html",
    controller: "mainOrdersCtrl"
  })
  .when("/products",{
    templateUrl: "partials/products/_index.html",
    controller: "mainProductsCtrl"
  })
  .when("/products/new",{
    templateUrl: "partials/products/_new.html",
    controller: "mainProductsCtrl"
  })
  .when("/products/:id/edit",{
    templateUrl: "partials/products/_edit.html",
    controller: "editProductsCtrl"
  })
  .when("/products/:id",{
    templateUrl: "partials/products/_show.html",
    controller: "editProductsCtrl"
  })
  .when("/customers",{
    templateUrl: "partials/customers/_index.html",
    controller: "mainCustomersCtrl"
  })
  .when("/customers/new",{
    templateUrl: "partials/customers/_reg.html",
    controller: "mainCustomersCtrl"
  })
  .when("/customers/:id/edit",{
    templateUrl: "partials/customers/_edit.html",
    controller: "editCustomersCtrl"
  })
  .when("/customers/:id",{
    templateUrl: "partials/customers/_show.html",
    controller: "editCustomersCtrl"
  })
  .when("/orders",{
    templateUrl: "partials/orders/_index.html",
    controller: "mainOrdersCtrl"
  })
  .otherwise({
    redirectTo: "/index"
  });
  
});
