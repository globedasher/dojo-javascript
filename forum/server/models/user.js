console.log("User Model");

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    reqire: true,
    trim: true,
    lower: true,
    minlength: 2,
    maxlength: 50,
  },
  topics: [{type: Schema.Types.ObjectId, ref: "Topics"}],
  posts: [{type: Schema.Types.ObjectId, ref: "Posts"}],
  comments: [{type: Schema.Types.ObjectId, ref: "Comments"}],
}, { timestamps: true });

mongoose.model("Users", userSchema);
