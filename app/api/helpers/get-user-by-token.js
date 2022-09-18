const jwt = require("jsonwebtoken");

const Users = require("../models/User");

//get user by jwt token
const getUserByToken = async (token) => {
  if (!token) {
    return undefined;
  }
  const decoded = jwt.verify(token, "mysecret");
  const user = await Users.findOne({
    _id: decoded.id,
  });

  return user;
};

module.exports = getUserByToken;
