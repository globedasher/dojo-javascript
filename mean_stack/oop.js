/**************Ninja**************
 *
 ***************END**************/


function Ninja(name, age, prevOccupation){

  var privateVar = 'This is a private variable';

  var privateMethod = function(){
    console.log('This is a private method.');
  };

  this.name = name;
  this.age = age;
  this.prevOccupation = prevOccupation;

  this.introduce = function(){
    console.log(`Hello, my name is ${name}, and I used to ${prevOccupation} for a living.`);
    privateMethod();
    console.log(privateVar);
  };

}

rich = new Ninja('Richard', 580, 'work');
rich.introduce();
