console.log("BucketListsController");

var mongoose = require("mongoose"),
    path = require("path"),
    bp = require("body-parser"),
    User = mongoose.model("Users"),
    BucketList = mongoose.model("BucketLists");

function handleError(err){
  console.log(err);
  return err;
}


function BucketListsController(){

  this.index = function(req, res){
    //console.log("Index");
    console.log(req.params);
    console.log(req.body);
    BucketList.find({})
    .populate("_user")
    .populate("_userB")
    .exec(function(err, bucketLists){
      if(err) console.log("Errors!");
      //console.log(bucketLists);
      res.json(bucketLists);
    });
  };
  
  // This create method is used to create new bucketLists.
  this.create = function(req, res){
    //console.log("Create");
    //console.log("Dir req");
    //console.dir(req.body);

    // find the user document
    User.findById(req.body._user._id, function(err, user){
      if(err){
        console.log(err);
        res.json(err);
      }

      // Search for bucketLists with the same date as the bucketList being
      // created.
      BucketList.find({date: req.body.date}, function(err, bucketLists){
        if(err){
          //console.log(err);
          return res.status(500).json(err.data);
        }

        // If there is space for the bucketList, instantiate the new
        // bucketList object.
        var bucketList = new BucketList(req.body);
        bucketList.done = false;
        bucketList.save(function(err){
          //console.dir(bucketList.toObject());
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
          res.json(bucketList);
        });


      });
    });
  };

  this.update = function(req, res){
    console.log("Update");
    //console.log(req.body._id);
    //console.log(req.params._id);
    BucketList.findOne({_id:req.body._id}, function(err, bucketList){
      if(err){
        return res.status(500).json("Not Updated");
      }
      console.dir(bucketList.done);
      if(bucketList.done === 'true'){
        bucketList.done = false;
        console.log("Now false");
      }else{
        bucketList.done = 'true';
        console.log("Now true");
      }
      //console.dir(req.body);
      bucketList.save(function(err){
        if(err){
          return res.status(500).json("Save failed");
        }
      });
      return res.json(bucketList);
    });
  };

  this.delete = function(req, res){
    console.log("Delete");
    console.log(req.params.id);
    BucketList.find({_id:req.params.id}).remove().exec();
    // my code here...
    res.json("BucketList deleted");
  };
}


module.exports = new BucketListsController();
