app.factory('playerFactory', [function(){
  //console.log('Player Factory');

  var players = [
    { _id: 0, name: 'Richard', age: 23 },
  ];
  // This iter var is used to create unique IDs for players.
  var iter = 0;

  var factory = {};
  // Factory methods...
  // PERFORM FULL CRUD
  //
  // Create .addPlayers adds the player passed to the method
  factory.addPlayer = function(playerInfo){
    // When this function is called, add the player info to the players array.
    players.push({ _id: ++iter, name: playerInfo.name, age: playerInfo.age});
    //console.log(players);
  };
  //
  // Retrieve .index returns all players
  factory.index = function(){
    return players;
  };
  //
  // Retrieve .show return one player.
  factory.show = function(id){
    //console.log("show");
    for(var i = 0; i < players.length; i++){
      // Find the array element that contains the id passed above.
      if(players[i]._id === parseInt(id)){
        return players[i];
      }
    }
    return 'not found';
  };
  //
  // Update .update edit one
  factory.update = function(id, playerInfo){
    //console.log(id);
    for(var i = 0; i < players.length; i++){
      //console.log('update for');
      // Find the array element that contains the id passed above.
      if(players[i]._id === id){
        // ...TODO: Why isn't the console.log below not showing, but the update
        // function appears to be operating...
        console.log('update');
        players[i] = {name: playerInfo.name, age: playerInfo.age};
      }
    }
  };
  //
  // Delete .destroy returns all players
  // Do not delete based off index, but id
  factory.destroy = function(id){
    //console.log(id);
    for(var i = 0; i < players.length; i++){
      // Find the array element that contains the id passed above.
      if(players[i]._id === id){
        //console.log(players[i]);
        players.splice(i,1);
      }
    }
  };
  factory.addTeam = function(id){
    console.log('add team to player object');
    for(var i = 0; i < players.length; i++){
      console.log('addTeam for');
      // Find the array element that contains the id passed above.
      if(players[i]._id === id){
        // TODO: Is this working?
        players[i] = {team: playerInfo.name};
        console.log('addAssn');
      }
    }
    console.log(players);
  };
  return factory;
}]);
