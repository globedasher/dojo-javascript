app.controller("editTopicsCtrl", ["$scope", "topicsFactory", "$routeParams", function($scope, topicsFactory, $routeParams){
  console.log("Edit Topics Controller");

  $scope.topics = [];
  $scope.topic = {};
  $scope.editTopic = {};

  topicsFactory.getOneTopic($routeParams.id, function(returnedData){
    console.log("get One!");
    $scope.topic =  returnedData;
    console.log($scope.topic);
    $scope.editTopic = angular.copy($scope.topic);
    //console.log($scope.editTopic);

    // Sameness check... 
    // if($scope.editTopic == $scope.topic){
    //   console.log("same");
    // }
    // console.log("individual");

    //console.log($scope.topic);
  });
  
  // This getTopic is used to get one pre-existing topic from the factroy
  topicsFactory.getTopic(function(response){
    console.log('controller get topic');
    console.log("response! " + response);
    $scope.topics = response.data;
  });
  //console.log($scope.topics);
  
  // This line invokes the getIndex function that retrieves all the topics
  // from the database.
  //$scope.getTopic();

  // This updateTopic method is used to update a topic object.
  $scope.updateTopic = function(){
    console.log("updateTopic");
    console.log($routeParams.id);
    console.log($scope.editTopic);
    topicsFactory.update($scope.editTopic, $routeParams.id);
    //Object.assign($scope.topic, $scope.editTopic);
    $scope.topic = angular.copy($scope.editTopic);
  };

}]);
