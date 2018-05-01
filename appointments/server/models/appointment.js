console.log("Appointment Model");

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var appointmentSchema = new Schema({
  date: {
    type: Date,
    required: [true, "Please choose a date"],
  },
  time: {
    type: String,
    required: [true, "Please choose a time"],
  },
  timezoneOffset: {
    type: Number,
  },
  complaint: {
    type: String,
    required: [true, "Please include a complaint"],
    trim: true,
    minlength: [2, "Complaint must be longer than 2 characters."],
    maxlength: [50, "Complaint max length is 50."],
  },
  _user: {type: Schema.Types.ObjectId, ref: "Users"},
}, { timestamps: true });

mongoose.model("Appointments", appointmentSchema);
