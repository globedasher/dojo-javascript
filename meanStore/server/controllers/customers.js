console.log("CustomersController");

var mongoose = require("mongoose"),
    path = require("path"),
    bp = require("body-parser"),
    Customer = mongoose.model("Customers"),
    Order = mongoose.model("Orders");

function handleError(err){
  console.log(err);
  return err;
}

function CustomersController(){

  this.index = function(req, res){
    console.log("Index");
    Customer.find({})
    .populate("orders")
    .exec(function(err, customers){
      if(err) console.log("Errors!");
      //console.log(customers);
      res.json(customers);
    });
  };
  
  // DONE: Sending responses and errors to the front end.
  this.create = function(req, res){
    console.log("Create");
    //console.log("Dir req");
    //console.log(req.body);
    var customer = new Customer(req.body);
    customer.save(function(err, customer){
      if(err){
        res.status(500).json(err);
      }else{
        res.status(200).json(customer);
      }
    });
  };

  // TODO: Determine if I need this! I am actually just getting single customers
  // from prexisting data on the front end...
  this.show = function(req, res){
    console.log("Show");
    // my code here...
    res.json({placeholder: "show"});
  };

  // DONE: Update method!
  this.update = function(req, res){
    console.log("Update");
    console.log(req.params.id);
    console.log("log 0");
    console.dir(req.body);

    Customer.findById(req.params.id, function(err, customer){
      if(err){
        res.status(500).json(err);
      }
      console.log("log 1");
      console.log(customer);
      console.log(customer.name.first);
      console.log(customer.name.last);
      console.log(customer.email);
      //console.log(customer.email);

      customer.name.first = req.body.name.first;
      customer.name.last = req.body.name.last;
      customer.email = req.body.email;
      console.log("log 2");
      customer.save(function(err, updatedCustomer){
        console.dir(err);
        if(err){
          res.status(500).json(err);
        }else{
          res.status(200).json(updatedCustomer);

        }
      });
      console.log("log 4");

    });
  };

  this.delete = function(req, res){
    //console.log("Delete");
    //console.log(req.params.id);
    Customer.find({_id:req.params.id}).remove().exec();
    // my code here...
    res.json("Customer deleted");
  };
}

module.exports = new CustomersController();
