// This is my functions.js file!!! by Morley

function runningLogger(){
  console.log("I am running!");
}

//runningLogger();


function multiplyByTen(val){
  val = val * 10;
  return val;
}

//console.log(multiplyByTen(5));


function stringReturnOne(){
  return "I'm the best hardcoded string.";
}

function stringReturnTwo(){
  return "The other string is a liar.";
}

function stringReturnThree(){
  return "Two strings just seemed repetitive.";
}

//console.log(stringReturnOne());
//console.log(stringReturnTwo());


function caller(parameter){
  if(typeof parameter === 'function'){
    parameter();
    //console.log('here');
    //console.log(parameter());
  }
}

//caller(stringReturnTwo);


function myDoubleConsoleLog(parameterOne, parameterTwo){
  if(typeof parameterOne === 'function'){
    console.log(parameterOne());
  }
  if(typeof parameterTwo === 'function'){
    console.log(parameterTwo());
  }
}

//myDoubleConsoleLog(stringReturnTwo, stringReturnThree);


function caller2(parameter){
  if(typeof parameter === 'function'){
    console.log('starting');
    setTimeout(function(){
      parameter(stringReturnOne, stringReturnTwo);
    }, 2000);
    console.log('ending?');
    return 'interesting';
  }
  return "Parameter must be a function.";
}

console.log(caller2(myDoubleConsoleLog));
