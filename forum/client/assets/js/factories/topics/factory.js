console.log("Topics Factory");

app.factory("topicsFactory", ["$http", function($http){

  factory = {};

  var topics = [];
  var topic = {};

  function errorCallback(error){
    console.log(error);
  }

  // Index route method...
  factory.index = function(callback){
    //console.log("factory.index() method");
    $http.get("/topics").then(function(response){
      topics = response.data;
      callback(topics);
    });
  };


  factory.create = function(topicInfo, callback){
    console.log("Factory topicInfo");
    console.log(topicInfo);
    $http.post("/topics", topicInfo)
      .then(function(response){
      console.log("Response from creating topic");
      console.log(response.data);
      topics.push(response.data);
      //console.log(topics);
      callback(response.data);
    })
      .catch(function(err){
        console.log(err);
    });
    console.log("Return here!");
  };

  factory.getOneTopic = function(id, callback){
    for(var x in topics){
      if(topics[x]._id === id){
        Object.assign(topic, topics[x]);
      }
    }
    callback(topic);
  };

  // because the topic will be selecting a topic from existing index on the
  // site, just pull from the index that is loaded into the factory already.
  factory.getTopic = function(id){
    //console.log("getTopic factory");
    //console.log(id);
    //console.log(topics);
    //console.log(typeof (topics));
    for(var i in topics){
      //console.log(topics[i]._id);
      if(topics[i]._id === id){
        topic = topics[i];
        //console.log("topic from factory");
        //console.log(topic);
        return topic;
      }
    }
    return "No topic";
  };

  return factory;
  

}]);
