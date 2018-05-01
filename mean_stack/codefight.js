function addTwoDigits(n){
  var ones = n % 10;
  var tens = Math.floor(n / 10);
  return tens + ones;
}

//console.log(addTwoDigits(29));

function largestNumber(n){
  var return_word = '';
  for(var i = 0; i < n; i++){
    return_word += 9;
  }
  return return_word;
}

this_one = Number(largestNumber(7));
console.log(this_one);
console.log(typeof (this_one));


