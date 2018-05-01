app.factory("appointmentsFactory", ["$http", function($http){
  console.log("Appointments Factory");

  factory = {};

  var appointments = [];
  var appointment = {};

  var days = [];
  var day = {};

  function errorCallback(error){
    console.log(error);
  }

  // Index route method...
  // This will his the index route of the backend and return the data from the
  // targeted route.
  factory.index = function(callback){
    //console.log("factory.index() method");
    $http.get("/appointments")
      .then(function(response){
      appointments = response.data;
      callback(appointments);
    });
  };


  factory.create = function(appointmentInfo, userInfo, callback){
    //console.log("appointmentInfo");
    //console.log(appointmentInfo);
    appointmentInfo._user = userInfo;
    //console.log("userInfo");
    //console.log(userInfo);
    //console.log("appointmentInfo");
    //console.log(appointmentInfo);
    $http.post("/appointments", appointmentInfo)
    .then(function(response){
      console.log("Response from creating appointment");
      console.log(response.data);
      appointments.push(response.data);
      callback(response.data);
    })
    .catch(function(err){
      // DONE: move err.data to the controller.
      //console.log(err.data);
      callback(err);
    });
  };


  factory.deleteAppointment = function(id){
    console.log("factory delete id");
    console.log(id);
    $http.delete("/appointments/" + id, id)
      .then(function(response){
      //console.log(response.data);
      //console.log("Response from deleteing appointment");
    })
      .catch(function(err){
        console.log(err);
      });
  };

  factory.getOneAppointment = function(id, callback){
    for(var x in appointments){
      if(appointments[x]._id === id){
        Object.assign(appointment, appointments[x]);
      }
    }
    callback(appointment);
  };

  // because the appointment will be selecting a appointment from existing index on the
  // site, just pull from the index that is loaded into the factory already.
  factory.getAppointment = function(id){
    //console.log("getAppointment factory");
    //console.log(id);
    //console.log(appointments);
    //console.log(typeof (appointments));
    for(var i in appointments){
      //console.log(appointments[i]._id);
      if(appointments[i]._id === id){
        appointment = appointments[i];
        //console.log("appointment from factory");
        //console.log(appointment);
        return appointment;
      }
    }
    return "No appointment";
  };

  factory.update = function(appointmentObject, id){
    console.log("Update");
    //console.log(appointmentObject);
    //console.log("End of appointment object");
    //console.log(id);
    $http.put("/appointments/" + id, appointmentObject)
      .then(function(response){
        console.log("Response from updating appointment");
        console.dir(response);
        console.log("~~~~~~~~~~~~~~");
      })
      .catch(function(err){
        console.dir(err);
    });
  };

  return factory;
  

}]);
