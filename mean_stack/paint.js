function orderSupplies(item, callback){
  var warehouse; // undefined
  var deliveryTime = Math.random() * 3000;
  setTimeout(function(){
      warehouse = {
            paint: {
                    product: "Neon Green Paint",
                    directions: function(){ return "mix it!";}
                  },
            brush: {
                    product: "Horsehair brush",
                    directions: function(){ return "start painting!"; }
                  }
          };
      callback(warehouse[item]);
  
  
    }, deliveryTime);
}

///////////ONLY CHANGE CODE BELOW THIS LINE//////////////// ///*
//
//You're looking to paint your room, so you order some supplies: paint and a
//brush. The problem is, we take the job seriously and will only start painting
//after we’ve mixed the paint. But the way our code is currently written, we’re
//not sure which callback will run first. That’s a major problem.
//
//Structure the code below in a way that ensures this line:
//
//"Neon Green Paint received, time to mix it!"
//
//Will ALWAYS log to the console before this line:
//
//Horsehair brush received, time to start painting!
//
//*/

orderSupplies('brush', function(item){
  console.log(`${item.product} received, time to ${item.directions()}`);
});

orderSupplies('paint', function(item){
  console.log(`${item.product} received, time to ${item.directions()}`);
});
