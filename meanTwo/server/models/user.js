console.log("User Model");

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minlength: 2,
    maxlength: 50,
  },
  bucketlists: [{type: Schema.Types.ObjectId, ref: "BucketLists"}],
}, { timestamps: true });

mongoose.model("Users", userSchema);
