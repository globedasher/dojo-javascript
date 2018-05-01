console.log("BucketList Model");

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var bucketListSchema = new Schema({
  done: {
    type: String,
  },
  title: {
    type: String,
    required: [true, "Please include a title"],
    trim: true,
    minlength: [5, "Title must be longer than 5 characters."],
  },
  description: {
    type: String,
    required: [true, "Please include a description"],
    trim: true,
    minlength: [10, "Description must be longer than 10 characters."],
  },
  _user: {type: Schema.Types.ObjectId, ref: "Users"},
  _userB: {type: Schema.Types.ObjectId, ref: "Users"},
}, { timestamps: true });

mongoose.model("BucketLists", bucketListSchema);
