console.log("ItemsController");

var mongoose = require("mongoose"),
    path = require("path"),
    bp = require("body-parser"),
    User = mongoose.model("Users"),
    Item = mongoose.model("Items");

function handleError(err){
  console.log(err);
  return err;
}


function ItemsController(){

  this.index = function(req, res){
    console.log("Index");
    //console.log(Day.find({}));
    Item.find({})
    .populate("_user")
    .exec(function(err, items){
      if(err) console.log("Errors!");
      //console.log(items);
      res.json(items);
    });
  };
  
  // This create method is used to create new items.
  this.create = function(req, res){
    console.log("Create");
    console.log("Dir req");
    console.dir(req.body);

    // find the user document
    User.findById(req.body._user._id, function(err, user){
      if(err){
        console.log(err);
        res.json(err);
      }

      // Search for items with the same date as the item being
      // created.
      Item.find({date: req.body.date}, function(err, items){
        if(err){
          //console.log(err);
          return res.status(500).json(err.data);
        }

        // If there is space for the item, instantiate the new
        // item object.
        var item = new Item(req.body);
        item.done = false;
        item.save(function(err){
          //console.dir(item.toObject());
          //console.dir(err);
          if(err){
            var keys = Object.keys(err.errors);
            //console.log(keys);
            var returnValue = [];

            for(var i = 0; i < keys.length; i++){
              returnValue[i] = err.errors[keys[i]].message;
            }
            //console.log(returnValue);
            //console.log("out!");
            return res.status(500).json(returnValue);
          }
          res.json(item);
        });


      });
    });
  };

  this.update = function(req, res){
    console.log("Update");
    Item.findOne({_id:req.params.id}, function(err, item){
      if(err){
        return res.status(500).json("Not Updated");
      }
      console.dir(item.done);
      item.done = true;
      console.dir(req.body);
      item.save(function(err){
        if(err){
          return res.status(500).json("Save failed");
        }
      });
      return res.json(item);
    });
  };

  this.delete = function(req, res){
    console.log("Delete");
    console.log(req.params.id);
    Item.find({_id:req.params.id}).remove().exec();
    // my code here...
    res.json("Item deleted");
  };
}


module.exports = new ItemsController();
