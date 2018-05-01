app.controller("mainCommentsCtrl", ["$scope", "commentsFactory", "$routeParams", function($scope, commentsFactory, $routeParams){
  //console.log("Main Comments Controller");
  
  $scope.comment = {};

  $scope.comments = [];
  
  // Get an index of all the comments.
  var index = function(){
    commentsFactory.index(function(factory_data){
      $scope.comments = factory_data;
    });
  };

  index();

  // This addComment method can be run to add a comment to the database
  $scope.addComment = function(){
    //console.log($scope.comment.name);
    commentsFactory.create($scope.comment);
    $scope.comment = {};
  };

  // This addComment method can be run to add a comment to the database
  $scope.deleteComment = function(_id){
    //console.log("deleteComment");
    //console.log(_id);
    commentsFactory.deleteComment(_id);
  };
  // This getComment is used to get one pre-existing comment from the factroy
  $scope.getComment = function(_id){
    $scope.comment = commentsFactory.getComment(_id);
  };
  //console.log($scope.comments);

  // This updateComment method is used to update a comment object.
  $scope.updateComment = function(){
    console.log("updateComment");
    //console.log($routeParams._id);
    $scope.comment = $scope.comments.find($routeParams.id);
    //console.log($scope.comment);
    commentsFactory.update($scope.comment);
  };

}]);
