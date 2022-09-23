const mongoose = require("mongoose");

const cadSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);
//timestamps é 3 horas adiantado
const Users = mongoose.model("users", cadSchema);

module.exports = Users;
