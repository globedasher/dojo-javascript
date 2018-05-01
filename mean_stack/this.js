function Ninja(name, age, prevOccupation) {

  // PRIVATE
  var self = this;
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log('this is a private method for ' + self.name);
    console.log(self); // What will print here?
  };

  // PUBLIC
  this.name = name;
  this.age = age;
  this.prevOccupation = prevOccupation;
  // PUBLIC METHODS DECLARED HERE
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod();           
    console.log(privateVar);
    };
  }
  var Speros = new Ninja("Speros", 24, "MBA");
  Speros.introduce();
