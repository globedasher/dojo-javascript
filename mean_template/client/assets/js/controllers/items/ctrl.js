app.controller("mainItemCtrl", ["$scope", "usersFactory", "itemsFactory", "$routeParams", "$location", "$cookies", function($scope, usersFactory, itemsFactory, $routeParams, $location, $cookies){
  console.log("Main Items Controller");
  //console.log($cookies);
  
  $scope.user = {};

  $scope.users = [];

  $scope.errors = [];

  $scope.item = {};
  $scope.items = [];
  $scope.newItem = {};
  
  //jGet an index of all the users.
  var index = function(){
    console.log("index");
    $scope.localUser = $cookies.getObject("user");
    console.log($scope.localUser);
    usersFactory.index(function(factory_data){
      $scope.users = factory_data;
    });
    itemsFactory.index(function(factory_data){
      $scope.items = factory_data;
    });
  };

  index();


  $scope.updateList = function(id){
    console.log("Update list");
    for(let i = 0; i < $scope.items.length - 1; i++){
      if($scope.items[i]._id === id){
        //console.log($scope.items[i]);
        //console.log($scope.items[i].done);
        if($scope.items[i].done === true){
          $scope.items[i].done = false;
          itemsFactory.update($scope.items, $scope.items[i]._id);
        }else{
          $scope.items[i].done = true;
          itemsFactory.update($scope.items, $scope.items[i]._id);
        }

      }
    }
    console.log(id);
    $scope.item = itemsFactory.update($scope.items, id);
    console.log($scope.items);
    console.log($scope.item);
  };

  $scope.logOut = function(){
    $scope.localUser = {};
    $cookies.putObject("user", $scope.localUser);
    $location.url("/index");
  };

  // This addUser method can be run to add a user to the database
  $scope.addUser = function(){
    $scope.newUser.name = $scope.newUser.name.toLowerCase();
    //console.log($scope.newUser);
    //console.log($scope.users);
    for(var i = 0; i < $scope.users.length; i++){
      //console.log("for");
      //console.log($scope.users[i].name);
      if($scope.users[i].name === $scope.newUser.name){
        //console.log("if");
        //$scope.localUser = $scope.users[i];
        //usersFactory.setUser($scope.localUser);
        //console.log($scope.users[i]);
        //console.dir($cookies.getAll());
        $cookies.putObject('user', $scope.users[i]);
        $scope.localUser = $cookies.getObject('user');
        $scope.newUser = {};
        //console.log($scope.localUser);
        //console.dir($scope.localUser);
        $location.url("/dashboard");
        return $scope.localUser;

      }
    }
    usersFactory.create($scope.newUser, function(data){
      //console.log("factory");
      //console.log(data);
      $cookies.putObject("user", data);
      $scope.localUser = $cookies.getObject("user");
    });
    $scope.newUser = {};
    $location.url("/dashboard");
  };

  $scope.addItem = function(){
    itemsFactory.create($scope.newItem, $scope.localUser, function(data){
      if(data.status === 500){
        $scope.errors = data.data;
      }else{
        console.log("here");
        $scope.items = data;
      }
      $scope.newItem = {};
    });
  };

  // This deleteItem method can be run to add a item to the database
  $scope.deleteItem = function(_id){
    console.log("deleteItem");
    console.log(_id);
    //console.log(Date.now());
    for(var item in $scope.items){
      console.log($scope.items[item].date);
      console.log($scope.items[item].time);
      //console.log(Date.parse($scope.items[item].date));
      if($scope.items[item]._id === _id){
        var twentyFourMilli = 60 * 60 * 1000 * 24;
        console.log(twentyFourMilli);
        $scope.errors = ["Cannot delete item with 24 hours of start time."];
        if(Date.parse($scope.items[item].date) - twentyFourMilli > Date.now()){
          console.log(Date.parse($scope.items[item].date) - twentyFourMilli);
          console.log(Date.now());
          itemsFactory.deleteitem(_id);
          delete $scope.errors;
          delete $scope.items[item];
        }
      }
    }
    itemsFactory.index(function(factory_data){
      $scope.items = factory_data;
    });

  };

  // This deleteUser method can be run to add a user to the database
  $scope.deleteUser = function(_id){
    //console.log("deleteUser");
    //console.log(_id);
    usersFactory.deleteUser(_id);
  };
  // This getUser is used to get one pre-existing user from the factroy
  $scope.getUser = function(_id){
    $scope.user = usersFactory.getUser(_id);
  };
  //console.log($scope.users);

  // This updateUser method is used to update a user object.
  $scope.updateUser = function(){
    console.log("updateUser");
    //console.log($routeParams._id);
    $scope.user = $scope.users.find($routeParams.id);
    //console.log($scope.user);
    usersFactory.update($scope.user);
  };

}]);
