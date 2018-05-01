
var _ = {
  map: function(array, callback) {
    var return_array = [];
    var return_array_index = 0;
    for(var index in array){
      return_array[return_array_index++] = callback(array[index]);
    }
    return return_array;
  },
  reduce: function(array, callback, memo, context) { 
    var return_array = [];
    var return_array_index = 0;
    for(var index in array){
      return_array[return_array_index++] = callback(memo, array[index]);
    }
    return return_array; 
  },
  find: function(array, callback) {   
    var return_value;
    var return_array_index = 0;
    for(var index in array){
      if(callback(array[index])){
        return_value = array[index];
        return return_value;
      }
    }
    return return_value;
  },
  filter: function(array, callback) { 
    var return_array = [];
    var return_array_index = 0;
    for(var index in array){
      if(callback(array[index])){
        return_array[return_array_index++] = array[index];
      }
    }
    return return_array;
  },
  reject: function(array, callback) { 
    var return_array = [];
    var return_array_index = 0;
    for(var index in array){
      if(!callback(array[index])){
        return_array[return_array_index++] = array[index];
      }
    }
    return return_array;
  }
};

var odds = _.reject([1,2,3,4,5,6], function(num){ return num % 2 === 0; });
console.log(odds);

var find = _.find([1,2,3,4,5], function(num) { return num % 2 === 0; });
console.log(find);

var filter = _.filter([1,2,3,4,5], function(num) { return num % 2 === 0; });
console.log(filter);

var reduce = _.reduce([1,2,3,4,5], function(memo, num){return memo + num; }, -1);
console.log(reduce);

var map = _.map([1,2,3], function(num){ return num * 3; });
console.log(map);

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0;  });
console.log(evens); // if things are working right, this will return [2,4,6].

