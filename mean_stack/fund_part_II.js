// I interpreted we would get an x and y index as well as an array we would
// then sum and return.
function returnSum(x,y, arr){
  var sum = 0;
  var i;
  for(i = 0; i < arr.length; i++){
    //console.log(i);
    if(i >= x & i <= y){
      //console.log('add!');
      sum += arr[i];
    }
  }
  return sum;
}

var array_one = [9,2,2,2,2,6,7,8,9];
//console.log(returnSum(1,4, array_one));


function minimumValue(arr){
  var minimum = arr[0];
  var i;
  for(i = 1; i < arr.length; i++){
    if(arr[i] < minimum){
      minimum = arr[i];
    }
  }
  return minimum;
}

var array_two = [9,2,2,-4,2,2,6,7,8,9];
//console.log(minimumValue(array_two));


function averageValue(arr){
  var average = arr[0];
  var i;
  for(i = 1; i < arr.length; i++){
    average += arr[i];
  }
  average = average / arr.length;
  return average;
}

var array_three = [2,3,56,2,54,2,65,76,2,45,56.3443];
//console.log(averageValue(array_three));


// Gets the sum of a range (x,y)
var variable_one = function(x,y, arr){
  var sum = 0;
  var i;
  for(i = 0; i < arr.length; i++){
    //console.log(i);
    if(i >= x & i <= y){
      //console.log('add!');
      sum += arr[i];
    }
  }
  return sum;
};

//console.log(variable_one(1,4,[1,2,2,2,2,4,5,6]));


// Gets the minimum
var variable_two = function(arr){
  var minimum = arr[0];
  var i;
  for(i = 1; i < arr.length; i++){
    if(arr[i] < minimum){
      minimum = arr[i];
    }
  }
  return minimum;
};

//console.log(variable_two([1,2,2,2,2,4,5,6]));


// Gets the average
var variable_three = function(arr){
  var average = arr[0];
  var i;
  for(i = 1; i < arr.length; i++){
    average += arr[i];
  }
  average = average / arr.length;
  return average;
};

//console.log(variable_three([1,2,2,2,2,4,5,6]));


var person = {
  name: 'Richard',
  distance_traveled: 0,
  say_name: function(){
    console.log(this.name);
  },
  say_something: function(parameter){
    console.log(this.name + ' says, "' + parameter + '"');
    return person;
  },
  walk: function(){
    console.log(this.name + ' is walking.');
    this.distance_traveled += 3;
    return person;
  },
  run: function(){
    console.log(this.name + ' is running.');
    this.distance_traveled += 10;
    return person;
  },
  crawl: function(){
    console.log(this.name + ' is crawling.');
    this.distance_traveled += 1;
    return person;
  },
  road_wear: function(){
    console.log(this.name + ' has moved ' + this.distance_traveled + ' units.');
    return person;
  },
};

person.say_name();
person.say_something("What up, y'all?");
person.walk().run().crawl().road_wear();
