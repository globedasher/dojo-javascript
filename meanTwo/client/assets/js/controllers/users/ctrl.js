app.controller("mainUsersCtrl", ["$scope", "usersFactory", "bucketListsFactory", "$routeParams", "$location", "$cookies", function($scope, usersFactory, bucketListsFactory, $routeParams, $location, $cookies){
  console.log("Main Users Controller");
  //console.log($cookies);
  
  $scope.user = {};

  $scope.users = [];

  $scope.errors = [];

  $scope.bucketLists = [];
  $scope.newBucketList = {};
  
  //jGet an index of all the users.
  var index = function(){
    console.log("index");
    $scope.localUser = $cookies.getObject("user");
    console.log($scope.localUser);
    usersFactory.getOneUser($routeParams.id, function(factory_data){
      $scope.user = factory_data;
    });
    bucketListsFactory.index(function(factory_data){
      $scope.bucketLists = factory_data;
    });
  };

  index();

  $scope.getOneUser = function(){
    console.log("ctrl get one");
    bucketListsFactory.getOneUser($routeParams.id, function(returnedData){
      $scope.user = returnedData;
    });
  };

  $scope.logOut = function(){
    $scope.user = {};
    $cookies.putObject("user", $scope.user);
    $location.url("/index");
  };

  $scope.updateList = function(id){
    console.log("Update list");
    console.log(id);
    bucketListsFactory.update($scope.bucketList, id);
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
        //$scope.user = $scope.users[i];
        //usersFactory.setUser($scope.user);
        //console.log($scope.users[i]);
        //console.dir($cookies.getAll());
        $cookies.putObject('user', $scope.users[i]);
        $scope.newUser = {};
        //console.log($scope.user);
        //console.dir($scope.user);
        $location.url("/dashboard");

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

  $scope.addBucketList = function(){
    //console.dir($scope.newBucketList);
    //console.dir($scope.user);
    
    // Get the client timezone offset and add it to the bucketList info
    $scope.newBucketList.timezoneOffset = new Date().getTimezoneOffset();
    //console.log*($scope.newBucketList);

    bucketListsFactory.create($scope.newBucketList, $scope.user, function(data){
      //console.log(typeof data);
      //console.dir(data);
      
      // This data object returns a whole object with a status that is returned
      // from the backend. If not a 200 success message, grab the error
      // messages and pass them on for processing.
      if(data.status === 500){
        //console.log("Error?");
        //console.log(data);
        $scope.errors = data.data;
      }else{
        $scope.bucketList = data;
        $scope.newBucketList = {};
        $location.url('/dashboard');
      }
    });
  };

  // This deleteBucketList method can be run to add a bucketList to the database
  $scope.deleteBucketList = function(_id){
    console.log("deleteBucketList");
    console.log(_id);
    //console.log(Date.now());
    for(var item in $scope.bucketLists){
      console.log($scope.bucketLists[item].date);
      console.log($scope.bucketLists[item].time);
      //console.log(Date.parse($scope.bucketLists[item].date));
      if($scope.bucketLists[item]._id === _id){
        var twentyFourMilli = 60 * 60 * 1000 * 24;
        console.log(twentyFourMilli);
        $scope.errors = ["Cannot delete bucketList with 24 hours of start time."];
        if(Date.parse($scope.bucketLists[item].date) - twentyFourMilli > Date.now()){
          console.log(Date.parse($scope.bucketLists[item].date) - twentyFourMilli);
          console.log(Date.now());
          bucketListsFactory.deletebucketList(_id);
          delete $scope.errors;
          delete $scope.bucketLists[item];
        }
      }
    }
    bucketListsFactory.index(function(factory_data){
      $scope.bucketLists = factory_data;
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
