app.factory('teamFactory', [function(){
  //console.log('Team Factory');

  var teams = [
    { _id: 0, name: "Tomahawks", city: "Seattle" },
  ];
  // This iter var is used to create unique IDs for teams.
  var iter = 0;

  var factory = {};
  // Factory methods...
  // PERFORM FULL CRUD
  //
  // Create .addTeams adds the team passed to the method
  factory.addTeam = function(teamInfo){
    // When this function is called, add the team info to the teams array.
    teams.push({ _id: ++iter, name: teamInfo.name, city: teamInfo.city});
    //console.log(teams);
  };
  //
  // Retrieve .index returns all teams
  factory.index = function(){
    return teams;
  };
  //
  // Retrieve .show return one team.
  factory.show = function(id){
    //console.log("show");
    for(var i = 0; i < teams.length; i++){
      // Find the array element that contains the id passed above.
      if(teams[i]._id === parseInt(id)){
        return teams[i];
      }
    }
    return 'not found';
  };
  //
  // Update .update edit one
  factory.update = function(id, teamInfo){
    //console.log(id);
    for(var i = 0; i < teams.length; i++){
      //console.log('update for');
      // Find the array element that contains the id passed above.
      if(teams[i]._id === id){
        // ...TODO: Why isn't the console.log below not showing, but the update
        // function appears to be operating...
        console.log('update');
        teams[i] = {name: teamInfo.name, city: teamInfo.city};
      }
    }
  };
  //
  // Delete .destroy returns all teams
  // Do not delete based off index, but id
  factory.destroy = function(id){
    //console.log(id);
    for(var i = 0; i < teams.length; i++){
      // Find the array element that contains the id passed above.
      if(teams[i]._id === id){
        //console.log(teams[i]);
        teams.splice(i,1);
      }
    }
  };
  factory.addPlayer = function(id){
    console.log('add player to team object');
    console.log(id);
    for(var i = 0; i < teams.length; i++){
      console.log('addPlayer for');
      // Find the array element that contains the id passed above.
      if(teams[i]._id === id){
        // TODO: Is this working?
        console.log('update');
        teams[i] = {player: teamInfo.name};
      }
    }
  };
  return factory;
}]);
