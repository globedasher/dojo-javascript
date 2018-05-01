app.controller("mainUsersCtrl", ["$scope", "usersFactory", "appointmentsFactory", "$routeParams", "$location", "$cookies", function($scope, usersFactory, appointmentsFactory, $routeParams, $location, $cookies){
  console.log("Main Users Controller");
  //console.log($cookies);
  
  $scope.user = {};

  $scope.users = [];

  $scope.errors = [];

  $scope.appointments = [];
  $scope.newAppointment = {};
  
  // Get an index of all the users.
  var index = function(){
    //console.log("index");
    $scope.user = $cookies.getObject("user");
    usersFactory.index(function(factory_data){
      $scope.users = factory_data;
    });
    appointmentsFactory.index(function(factory_data){
      $scope.appointments = factory_data;
    });
  };

  index();

  $scope.logOut = function(){
    $scope.user = {};
    $cookies.putObject("user", $scope.user);
  };

  // This addUser method can be run to add a user to the database
  $scope.addUser = function(){
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
        $scope.user = $cookies.getObject('user');
        $scope.newUser = {};
        //console.log($scope.user);
        //console.dir($scope.user);
        return $scope.user;

      }
    }
    usersFactory.create($scope.newUser, function(data){
      //console.log("factory");
      //console.log(data);
      $cookies.putObject("user", data);
      $scope.user = $cookies.getObject("user");
    });
    $scope.newUser = {};
  };

  $scope.addAppointment = function(){
    //console.dir($scope.newAppointment);
    //console.dir($scope.user);
    
    // Get the client timezone offset and add it to the appointment info
    $scope.newAppointment.timezoneOffset = new Date().getTimezoneOffset();
    //console.log*($scope.newAppointment);

    appointmentsFactory.create($scope.newAppointment, $scope.user, function(data){
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
        $scope.appointment = data;
        $scope.newAppointment = {};
        $location.url('/index');
      }
    });
  };

  // This deleteAppointment method can be run to add a appointment to the database
  $scope.deleteAppointment = function(_id){
    console.log("deleteAppointment");
    console.log(_id);
    //console.log(Date.now());
    for(var item in $scope.appointments){
      console.log($scope.appointments[item].date);
      console.log($scope.appointments[item].time);
      //console.log(Date.parse($scope.appointments[item].date));
      if($scope.appointments[item]._id === _id){
        var twentyFourMilli = 60 * 60 * 1000 * 24;
        console.log(twentyFourMilli);
        $scope.errors = ["Cannot delete appointment with 24 hours of start time."];
        if(Date.parse($scope.appointments[item].date) - twentyFourMilli > Date.now()){
          console.log(Date.parse($scope.appointments[item].date) - twentyFourMilli);
          console.log(Date.now());
          appointmentsFactory.deleteAppointment(_id);
          delete $scope.errors;
          delete $scope.appointments[item];
        }
      }
    }
    appointmentsFactory.index(function(factory_data){
      $scope.appointments = factory_data;
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
