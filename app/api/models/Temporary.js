const mongoose = require("mongoose");

const cadSchema = new mongoose.Schema({
  userId: { type: String },
  listBuy: [],
  total: { type: String },
  items: { type: Number },
  payment: { type: String },
  date: { type: String },
});

const Temporary = mongoose.model("temporaries", cadSchema);

module.exports = Temporary;
