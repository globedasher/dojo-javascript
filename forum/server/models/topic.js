console.log("Topic Model");

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var topicSchema = new Schema({
  text: {
    type: String,
    reqire: true,
    trim: true,
    minlength: 2,
    maxlength: 500,
  },
  description: {
    type: String,
    reqire: true,
    trim: true,
    minlength: 2,
    maxlength: 500,
  },
  category: {
    type: String,
    reqire: true,
    trim: true,
    minlength: 2,
    maxlength: 30,
  },
  _user: {type: Schema.Types.ObjectId, ref: "Users"},
  posts: [{type: Schema.Types.ObjectId, ref: "Posts"}]
}, { timestamps: true });

mongoose.model("Topics", topicSchema);
