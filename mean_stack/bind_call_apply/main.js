// $(document).ready(function(){
//   console.log("main.js!!");
// 
//   var customObject = {
//     name: 'Washington, Everett',
//     onClick: function(myParam){
//       console.log("I've been clicked");
//       console.log(myParam, " I've been passed by bind.");
//       console.log(this.name);
//     }
//   };
//   
//   var newObject = {
//     name: 'Virginia, That Town',
//   };
// 
//   $('button').click(customObject.onClick.bind(customObject, "Bind this argument"));
// });




function Ninja(name, age, height){
  this.name = name;
  this.age = age;
  this.height = height; // In centimeters
  // there could be lots of other stuff here!
}

function BlackBelt(name,age,height,super_power){
  //Commas!
  Ninja.call(this,name,age,height,super_power);
  this.belt = 'black';
  this.super_power = super_power;
}

function YellowBelt(name,age,height){
  //ARRAY
  Ninja.apply(this,[name,age,height]);
  this.belt = 'yellow';
}

var yB = new YellowBelt('mike', 40, 170);
var bB = new BlackBelt('charlie', 29, 200, "Lightning Bolt");
console.log(bB.name);
console.log(bB.age);
console.log(bB.belt);
console.log(bB.height);
console.log(bB.super_power);
console.log(yB.name);
console.log(yB.age);
console.log(yB.belt);
console.log(yB.height);




function levelUp() {
  console.log(this.name + " has learned a new kata, in " + this.gender + " favorite language: " + this.language + ". This is the way we ge to work " + this.vehicle);
}


var person = {
  name: 'Lisa',
  gender: 'her',
  language: 'JavaScript, duh!',
  vehicle: 'Bus'
};

levelUp.call(person);

var person = {
  name: 'Karen',
  gender: 'her',
  language: 'CSS',
  vehicle: 'Subaru'
};

levelUp.call(person);

var person = {
  name: 'Violet',
  gender: 'her',
  language: 'none, yet!',
  vehicle: 'love.'
};


levelUp.call(person);
