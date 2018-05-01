console.log("Item Model");

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var itemSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please include a name"],
    trim: true,
    minlength: [3, "Title must be longer than three characters."],
  },
  description: {
    type: String,
    required: [true, "Please include a description"],
    trim: true,
    minlength: [10, "Description must be longer than ten characters."],
  },
  _user: {type: Schema.Types.ObjectId, ref: "Users"},
}, { timestamps: true });

mongoose.model("Items", itemSchema);
