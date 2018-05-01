app.controller("mainPostsCtrl", ["$scope", "usersFactory", "commentsFactory", "postsFactory", "topicsFactory", "$routeParams", "$cookies", function($scope, usersFactory, commentsFactory, postsFactory, topicsFactory, $routeParams, $cookies){
  console.log("Main Posts Controller");
  
  $scope.comment = {};
  $scope.comments = [];

  $scope.user = {};
  $scope.users = [];

  $scope.post = {};
  $scope.posts = [];

  $scope.topic = {};
  $scope.topics = [];

  $scope.newPost = {};

  $scope.newTopic = {};
  
  // Get an index of all the posts.
  var index = function(){
    topicsFactory.index(function(factory_data){
      $scope.topics = factory_data;
    });
    var this_var = "589e87049dcbd57652bc2e5c";
    $scope.user = usersFactory.getUser(this_var);
  };

  index();

  $scope.addTopic = function(){
    //console.log("add Topic dir");
    //console.dir($scope.topic);
    console.log("Controller topicInfo");
    console.log($scope.newTopic);
    topicsFactory.create($scope.newTopic, function(topic){
      console.log($scope.topics);

    });
    $scope.newTopic = {};
  };

  // This addPost method can be run to add a post to the database
  $scope.addPost = function(){
    //console.log("add Post dir");
    //console.dir($scope.post);
    console.log("Controller postInfo");
    console.log($scope.newPost);
    postsFactory.create($scope.newPost, function(post){
      console.log($scope.posts);

    });
    $scope.newPost = {};
  };

  // This getPost is used to get one pre-existing post from the factroy
  $scope.getPost = function(_id){
    $scope.post = postsFactory.getPost(_id);
  };
  //console.log($scope.posts);

  // This updatePost method is used to update a post object.
  $scope.updatePost = function(){
    console.log("updatePost");
    //console.log($routeParams._id);
    $scope.post = $scope.posts.find($routeParams.id);
    //console.log($scope.post);
    postsFactory.update($scope.post);
  };

}]);
