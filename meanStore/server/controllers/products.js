console.log("Products Controller");

var mongoose = require("mongoose"),
    path = require("path"),
    bp = require("body-parser"),
    Product = mongoose.model("Products");


function ProductsController(){

  this.index = function(req, res){
    console.log("Index");
    Product.find({}, function(err, products){
      if(err) return handleError(err);
      //console.log(products);
      res.json(products);
    });
  };
  
  this.create = function(req, res){
    console.log("Create");
    //console.log("Dir req");
    //console.log(req.body);
    var product = new Product(req.body);
    product.save(function(error, product){
      if(error){
        return res.json(error);
      } else if(product){
        return res.json(product);
      }
      //console.log(error);
      //console.log(product);
      //res.json("Product add success");
    });
  };

  this.show = function(req, res){
    console.log("Show");
    // my code here...
    res.json({placeholder: "show"});
  };

  this.update = function(req, res){
    console.log("Update");
    //console.log(req.params.id);
    //console.log(req.body);
    Product.findById(req.params.id, function(err, product){
      if(err){console.log(err);}
      //console.log(product);
      product.name = req.body.name;
      product.save();
    });
    //console.log(product.name);
    res.json("Update success");
  };

  this.delete = function(req, res){
    //console.log("Delete");
    //console.log(req.params.id);
    Product.find({_id:req.params.id}).remove().exec();
    // my code here...
    res.json("Product deleted");
  };
}

module.exports = new ProductsController();
