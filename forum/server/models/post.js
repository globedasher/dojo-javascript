console.log("Post Model");

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var postSchema = new Schema({
  text: {
    type: String,
    reqire: true,
    trim: true,
    minlength: 2,
    maxlength: 500,
  },
  votes: {
    type: Number,
  },
  _user: {type: Schema.Types.ObjectId, ref: "Users"},
  comment: [{type: Schema.Types.ObjectId, ref: "Comments"}],
}, { timestamps: true });

mongoose.model("Posts", postSchema);
