/* **************** Game Constructor ******************
private vars: consumerPrice, dealerCost
private methods: myPrivateFunction: just console.logs, no logic
public properties:  _name: acquired from parameters
                    type: constant, 'board game'
                    player: array


public methods:     addPlayer: adds a player by name to player array
                    showPrivateVariables: console.logs our private variables
on run: runs myPrivateFunction
returns: ourGame object.
*****************  END *******************/


function GameConstructor(consumerPrice,dealerCost,name, inStock){
  //console.log(inStock);


  var consumerPrice = consumerPrice;
  var dealerCost = dealerCost;
  var ourGame = {};


  ourGame._name = name;
  ourGame.type = 'board game';
  ourGame.player = [];


  ourGame.addPlayer = function(player_name){
    ourGame.player.push(player_name);
  };
  ourGame.showPrivateVariables = function(){
    console.log(dealerCost);
    console.log(consumerPrice);
  };


  function myPrivateFunction(name, inStock){
    console.log('hello, I am going to create a new object when I am returned!');
    if(inStock === false){
      console.log(`What? Your game, ${name}, is going to be out of stock?`);
    }else{
      console.log(`Your game, ${name}, will be in stock.`);
    }
  }


  myPrivateFunction(name, inStock);
  return ourGame;
}

vanDame = GameConstructor(12, 1, "Faulty Towers", false);
vanDame.showPrivateVariables();
rich = GameConstructor(355, 200, "Towers of Babel", true);
rich.addPlayer("Richie");
rich.showPrivateVariables();
