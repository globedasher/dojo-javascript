console.log("Pokemon Running!");

var game = {
  players: [],
  addPlayer: function(){}
};

function playerConstructor(name){
  player = {};
  player.name = name;
  player.card = null;
  player.hand = [];
  player.addCard = function(card){
    player.hand.push(card);
  };
  console.log(`Hi, I'm ${player.name}!`);
  return player;
}

function draw(player_object){
  var card = $.get("http://pokeapi.co/api/v2/pokemon/" + Math.ceil(Math.random() * 128), function(card){
    return player_object.addCard(card);
  });
}



var jack = playerConstructor("Jack");
draw(jack);
console.log(jack.hand);
