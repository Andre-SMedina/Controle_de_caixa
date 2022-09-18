const mongoose = require("mongoose");

const cadSchema = new mongoose.Schema({
  userId: { type: String },
  listBuy: [],
  total: { type: String },
  items: { type: Number },
  payment: { type: String },
  date: { type: String },
});

const Caixa = mongoose.model("Caixa", cadSchema);

module.exports = Caixa;
