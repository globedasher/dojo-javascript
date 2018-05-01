console.log("Product Model");

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var productSchema = new Schema({
  name: {
    type: String,
    reqire: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  description: {
    type: String,
    reqire: true,
    trim: true,
    minlength: 2,
    maxlength: 500,
  },
  _orders: {type: Schema.Types.ObjectId, ref: "Orders"},
}, { timestamps: true });

mongoose.model("Products", productSchema);
