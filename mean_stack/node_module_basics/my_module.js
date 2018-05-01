/*****************my_module.js********************
 *
 *
 *
 *
 *********************END*************************/



module.exports = function(){
  return{
    greet: function(){
      console.log("We are now using a module.");
    },
    add: function(numberOne, numberTwo){
      console.log("The sum is: ", numberOne + numberTwo);
    }
  };
};
