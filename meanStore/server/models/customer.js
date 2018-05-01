console.log("Customer Model");

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var customerSchema = new Schema({
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
  orders: [{type: Schema.Types.ObjectId, ref: "Orders"}],
}, { timestamps: true });

mongoose.model("Customers", customerSchema);
