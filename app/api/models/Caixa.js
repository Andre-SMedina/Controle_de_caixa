const mongoose = require("mongoose");

const cadSchema = new mongoose.Schema({
  listBuy: [],
  total: { type: String },
  items: { type: Number },
  payment: { type: String },
  date: { type: String },
});

const Caixa = mongoose.model("caixa", cadSchema);

module.exports = Caixa;
