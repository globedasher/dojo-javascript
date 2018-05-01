console.log("AppointmentsController");

var mongoose = require("mongoose"),
    path = require("path"),
    bp = require("body-parser"),
    User = mongoose.model("Users"),
    Appointment = mongoose.model("Appointments");

function handleError(err){
  console.log(err);
  return err;
}


function AppointmentsController(){

  this.index = function(req, res){
    console.log("Index");
    //console.log(Day.find({}));
    Appointment.find({})
    .populate("_user")
    .exec(function(err, appointments){
      if(err) console.log("Errors!");
      //console.log(appointments);
      for(var app in appointments){
        // Create offset
        var offset = appointments[app].timezoneOffset * 60 * 1000;
        appointments[app].date.setTime(appointments[app].date.getTime() + offset);
        console.log(appointments[app].date);
        console.log(appointments[app].timezoneOffset);
        console.log(new Date(appointments[app].date));
      }
      res.json(appointments);
    });
  };
  
  // This create method is used to create new appointments.
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

      // Search for appointments with the same date as the appointment being
      // created.
      Appointment.find({date: req.body.date}, function(err, appointments){
        if(err){
          //console.log(err);
          return res.status(500).json(err.data);
        }
        // If there are already three appointments for the day, return error
        if(appointments.length >= 3){
          return res.status(500).json(["No more than three appointments can be scheduled for one day."]);
        }
        //console.log(appointments);



        // Get the current timezone offset.
        //var offset = new Date().getTimezoneOffset();
        // Add the offset into the req.body object
        //req.body.timezoneOffset = offset;
        //console.log(req.body.timezoneOffset);
        //console.log(req.body);


        var date = new Date(req.body.date);
        console.log(date + " Date!!");
        req.body.date = date;
        console.log(req.body);
        console.log(req.body.date);



        //console.dir(Date.now());
        //console.log(Date.parse(req.body.date));
        
        // Time validation
        // Date.parse() converts the date into miliseconds since Jan 1, 1970
        // Date.now() provides the current date in miliseconds since Jan 1, 1970
        if(Date.parse(req.body.date) < Date.now()){
          return res.status(500).json(["Appointments dates must be in the future."]);
        }

        // DONE: iterate through the appointements in the day and see if the
        // user already has an appointment today.
        //console.log(appointments[0]._user);
        for(var i = 0; i < appointments.length; i++){
          //console.log("search the day's appointments");
          //console.log(i);
          //console.log(typeof appointments[i]._user);
          //console.log(typeof req.body._user._id);
          if(appointments[i]._user == req.body._user._id){
            console.log("match for this user");
            return res.status(500).json(["Sorry. You already have an appointment that day."]);
          }
          if(appointments[i].time == req.body.time){
            console.log("match for time");
            return res.status(500).json(["Sorry. This time is already reserved."]);
          }
        }


        // If there is space for the appointment, instantiate the new
        // appointment object.
        var appointment = new Appointment(req.body);
        appointment.save(function(err){
          //console.dir(appointment.toObject());
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
          res.json(appointment);
        });


      });
    });
  };

  this.delete = function(req, res){
    console.log("Delete");
    console.log(req.params.id);
    Appointment.find({_id:req.params.id}).remove().exec();
    // my code here...
    res.json("Appointment deleted");
  };
}


module.exports = new AppointmentsController();
