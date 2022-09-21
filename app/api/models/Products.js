const mongoose = require("mongoose");
let model;

const cadSchema = new mongoose.Schema({
  name: { type: String },
  brand: { type: String },
  description: { type: String },
  price: { type: Number },
  amount: { type: Number },
  cod: { type: Number },
  userId: { type: String },
});

const Products = mongoose.model("Products", cadSchema);

module.exports = Products;
