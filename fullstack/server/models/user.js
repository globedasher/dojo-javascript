console.log("User Model");

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    last: {
      type: String,
      reqire: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    first: {
      type: String,
      reqire: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
    minlength: 8,
    maxlength: 50,
  },
  password: {
    type: String,
    require: true,
    trim: true,
    minlength: 8,
    maxlength: 50,
  },
  birthday: {
    type: Date,
    require: true,
  }
}, { timestamps: true });

mongoose.model("users", userSchema);
