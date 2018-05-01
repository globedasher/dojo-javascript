console.log("Routes");

var mongoose = require("mongoose"),
    path = require("path"),
    Products = require("../controllers/products.js");
    Customers = require("../controllers/customers.js");
    Orders = require("../controllers/orders.js");

module.exports = function(app){
  app.get("/products", Products.index);
  app.post("/products", Products.create);
  app.get("/products/:id", Products.show);
  app.put("/products/:id", Products.update);
  app.delete("/products/:id", Products.delete);

  app.get("/customers", Customers.index);
  app.post("/customers", Customers.create);
  app.get("/customers/:id", Customers.show);
  app.put("/customers/:id", Customers.update);
  app.delete("/customers/:id", Customers.delete);

  app.get("/orders", Orders.index);
  app.post("/orders", Orders.create);

};
