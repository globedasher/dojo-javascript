console.log("Order Model");

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var orderSchema = new Schema({
  _customer: {type: Schema.Types.ObjectId, ref: "Customers"},
  product: {type: Schema.Types.ObjectId, ref: "Products"},
}, { timestamps: true });

mongoose.model("Orders", orderSchema);
