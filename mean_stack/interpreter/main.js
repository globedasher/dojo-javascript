// Problem 1
var first_variable;
console.log(first_variable);
first_variable = "Yipee I was first!";

// NEVER CALLED
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}

console.log(first_variable);


// Because the function on line 7 is never called, Problem 1 is essentially:
var first_variable;
console.log(first_variable);
first_variable = "Yipee I was first!";
console.log(first_variable);


// Problem 2
var food = "Chicken";
function eat() {
  var food;
  food = "half-chicken";
  console.log(food);
  food = "gone";
  console.log(food);
}
eat();
console.log(food);


// Problem 3
var new_word = "NEW!";

// NEVER CALLED
function lastFunc() {
  new_word = "old";
}

console.log(new_word);


// Because the function on line 39 is never called, Problem 3 is essentially:
var new_word = "NEW!";
console.log(new_word);
