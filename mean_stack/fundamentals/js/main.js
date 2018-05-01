console.log('JavaScript running from external file, dude.');

var x = [3,5,'Dojo', 'rocks', 'Michael', 'Sensei'];
var x_length = x.length;
var i;
for(i=0; i < x_length; i++){
  console.log(x[i]);
}

x.push(100);
console.log(x);
x.push('hello', 'world', 'JavaScript is Fun');
console.log(x);

var total = 0;
var y;
for(y=1; y<=500; y++){
  total += y;
}
console.log(total);

var arr = [1,5,90,25,-3,0];
var arr_length = arr.length;
var lowest = arr[0];
var average = 0;
var q;
for(q=0; q <arr_length; q++){
  if(arr[q] < lowest){
    lowest = arr[q];
  }
  average += arr[q];
}
average = average / arr_length;
console.log(average);
console.log(lowest);
