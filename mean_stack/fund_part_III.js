"use strict";
// This is fundamentals part III!!!
// Don't use this as in this. Not the file, but the javascript reference.

function personConstructor(personName){
  var person = {
    name: personName,
    distance_traveled: 0,

    say_name: function(){
      console.log("Hi, I'm " + person.name + "!!!");
    },
    
    say_something: function(parameter){
      console.log(person.name + ' says, "' + parameter + '"');
      return person;
    },

    walk: function(){
      console.log(person.name + ' is walking.');
      person.distance_traveled += 3;
      return person;
    },

    run: function(){
      console.log(person.name + ' is running.');
      person.distance_traveled += 10;
      return person;
    },

    crawl: function(){
      console.log(person.name + ' is crawling.');
      person.distance_traveled += 1;
      return person;
    },

    road_wear: function(){
      console.log(person.name + ' has moved ' + person.distance_traveled + ' units.');
      return person;
    },

  };
  return person;
}


function ninjaConstructor(ninjaName, cohortName){
  var ninja = {
    name: ninjaName,
    cohort: cohortName,
    belt_level: "Yellow Belt",
    level_up: function(){
      console.log(ninja.name + " was a " + ninja.belt_level);
      if(ninja.belt_level === "Yellow Belt"){
        ninja.belt_level = "Orange Belt";
      }else if(ninja.belt_level === "Orange Belt"){
        ninja.belt_level = "Black Belt";
      }
      console.log(ninja.name + "'s rank is now " + ninja.belt_level);
      return ninja;
    },
    say_name: function(){
      console.log(ninja.name + " was here, but you didn't here it from me.");
      return ninja;
    },
  };
  return ninja;
}


var richard = personConstructor('Richard');
//richard.walk().run().road_wear().say_something('Yo!').say_name();

var shinobi = ninjaConstructor('Shinobi', 'My Team!');
shinobi.say_name().level_up().level_up().level_up();

var myVariable = () => { console.log("hello"); };
myVariable();
