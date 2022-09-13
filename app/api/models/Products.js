const mongoose = require("mongoose");

const cadSchema = new mongoose.Schema({
  name: { type: String },
  brand: { type: String },
  description: { type: String },
  price: { type: Number },
  cod: { type: Number },
});

const Products = mongoose.model("products", cadSchema);

module.exports = Products;
