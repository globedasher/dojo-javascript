app.controller("editCommentsCtrl", ["$scope", "commentsFactory", "$routeParams", function($scope, commentsFactory, $routeParams){
  console.log("Edit Comments Controller");

  $scope.comments = [];
  $scope.comment = {};
  $scope.editComment = {};

  commentsFactory.getOneComment($routeParams.id, function(returnedData){
    console.log("get One!");
    $scope.comment =  returnedData;
    //console.log($scope.comment);
    $scope.editComment = angular.copy($scope.comment);
    //console.log($scope.editComment);

    // Sameness check... 
    // if($scope.editComment == $scope.comment){
    //   console.log("same");
    // }
    // console.log("individual");

    //console.log($scope.comment);
  });
  
  // This getComment is used to get one pre-existing comment from the factroy
  commentsFactory.getComment(function(response){
    console.log('controller get comment');
    console.log("response! " + response);
    $scope.comments = response.data;
  });
  //console.log($scope.comments);
  
  // This line invokes the getIndex function that retrieves all the comments
  // from the database.
  //$scope.getComment();

  // This updateComment method is used to update a comment object.
  $scope.updateComment = function(){
    console.log("updateComment");
    console.log($routeParams.id);
    console.log($scope.editComment);
    commentsFactory.update($scope.editComment, $routeParams.id);
    //Object.assign($scope.comment, $scope.editComment);
    $scope.comment = angular.copy($scope.editComment);
  };

}]);
