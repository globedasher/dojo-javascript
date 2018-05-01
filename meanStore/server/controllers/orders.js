console.log("OrdersController");

var mongoose = require("mongoose"),
    path = require("path"),
    bp = require("body-parser"),
    Order = mongoose.model("Orders"),
    Customer = mongoose.model("Customers"),
    Product = mongoose.model("Products");

function handleError(err){
  console.log(err);
  return err;
}

function OrdersController(){

  this.index = function(req, res){
    console.log("Index");
    Order.find({})
    .populate("product")
    .populate("_customer")
    .exec(function(err, orders){
      if(err) console.log("Errors!");
      //console.log(orders);
      res.json(orders);
    });
  };
  
  this.create = function(req, res){
    console.log("Create");
    
    //console.log("log req.body");
    //console.dir(req.body);

    //console.log(req.body.customer_id);
    //console.log(req.body.product_id);

    //console.log("Log 0");
    Customer.findOne({_id: req.body._customer}, function(err, customer){
      if(err){
        console.log(err);
        res.json(err);
      }
      Product.findById(req.body.product, function(err, product){
        if(err){
          console.log(err);
          res.json(err);
        }
        //console.log(customer.name);
        //console.log(customer.orders);
        //console.log("Log 1");
        console.log("Req.body!");
        console.log(req.body);
        var order = new Order(req.body);
        console.log(typeof (order));
        //console.dir(order);
        order.save(function(err){
          if(err){
            console.log("Save Error");
          }
          customer.orders.push(order);
          customer.save(function(err){
            //console.log("Log 2");
            if(err){
              console.log("Error!");
            }else{
              order.product = product;
              order._customer = customer;
              console.log(order);
              res.json(order);
            }
          });
        });
      });
    });
  };
}

module.exports = new OrdersController();
