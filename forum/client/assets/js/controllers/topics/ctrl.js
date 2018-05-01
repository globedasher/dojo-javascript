app.controller("mainTopicsCtrl", ["$scope", "topicsFactory", "$routeParams", function($scope, topicsFactory, $routeParams){
  //console.log("Main Topics Controller");
  
  $scope.topic = {};

  $scope.topics = [];
  $scope.editTopic = {};
  
  // Get an index of all the topics.
  var index = function(){
    topicsFactory.index(function(factory_data){
      $scope.topics = factory_data;
    });
  };

  index();

  // This addTopic method can be run to add a topic to the database
  $scope.addTopic = function(){
    //console.log($scope.topic.name);
    topicsFactory.create($scope.newTopic, function(data){

    });
    $scope.newTopic = {};
  };

  // This addTopic method can be run to add a topic to the database
  $scope.deleteTopic = function(_id){
    //console.log("deleteTopic");
    //console.log(_id);
    topicsFactory.deleteTopic(_id);
  };
  // This getTopic is used to get one pre-existing topic from the factroy
  $scope.getTopic = function(_id){
    $scope.topic = topicsFactory.getTopic(_id);
  };
  //console.log($scope.topics);

  // This updateTopic method is used to update a topic object.
  $scope.updateTopic = function(){
    console.log("updateTopic");
    //console.log($routeParams._id);
    $scope.topic = $scope.topics.find($routeParams.id);
    //console.log($scope.topic);
    topicsFactory.update($scope.topic);
  };

}]);
