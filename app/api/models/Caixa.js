const mongoose = require("mongoose");

const cadSchema = new mongoose.Schema({
  name: { type: String },
  brand: { type: String },
  description: { type: String },
  price: { type: Number },
  cod: { type: Number },
  date: { timestamps: true },
});

const Caixa = mongoose.model("caixa", cadSchema);

module.exports = Caixa;
// { timestamps: true }
