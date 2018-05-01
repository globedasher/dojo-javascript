console.log("Friend Model");

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var friendSchema = new Schema({
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
    minlength: 8,
    maxlength: 50,
  },
}, { timestamps: true });

mongoose.model("friends", friendSchema);
