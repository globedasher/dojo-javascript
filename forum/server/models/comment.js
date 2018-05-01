console.log("Comment Model");

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var commentSchema = new Schema({
  text: {
    type: String,
    reqire: true,
    trim: true,
    minlength: 2,
    maxlength: 500,
  },
  _user: {type: Schema.Types.ObjectId, ref: "Users"},
  _post: {type: Schema.Types.ObjectId, ref: "Posts"}
}, { timestamps: true });

mongoose.model("Comments", commentSchema);
