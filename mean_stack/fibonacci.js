function fib() {
  var number = 0;
  var previous_number;
  var total;
  var index = 0;
  function nacci() {
    if(index * 1 < 2){
      total = 1;
      number = 1;
      previous_number = 1;
      console.log(number);
      index++;
    }else{
      total = number + previous_number;
      previous_number = number;
      number = total;
      console.log(total);
      index++;
    }
  }
  return nacci;
}

var fibCounter = fib();
fibCounter(); // should console.log "1" [0] index  
fibCounter(); // should console.log "1" [1] index
fibCounter(); // should console.log "2" [2] index
fibCounter(); // should console.log "3" [3] index
fibCounter(); // should console.log "5" [4] index
fibCounter(); // should console.log "8" [5] index
fibCounter(); // should console.log "13" [6] index
fibCounter(); // should console.log "21" [7] index
