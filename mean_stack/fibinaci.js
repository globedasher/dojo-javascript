function fib() {
  var number = 1;
  var previous_number = 0;
  var total = 0;
  function nacci() {
    console.log(number);
    var total = number + previous_number;
    previous_number = number;    number = total;
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
