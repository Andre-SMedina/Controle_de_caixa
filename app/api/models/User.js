const mongoose = require("mongoose");

const cadSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

const Users = mongoose.model("users", cadSchema);

module.exports = Users;
