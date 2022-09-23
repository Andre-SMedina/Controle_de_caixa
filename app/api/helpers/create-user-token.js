const jwt = require("jsonwebtoken");

const createUserToken = async (user, req, res) => {
  //create token
  const token = jwt.sign(
    {
      name: user.name,
      id: user._id,
    },
    "mysecret"
  );

  //return token
  res.status(200).json({
    message: "Você está autenticado.",
    token: token,
    userId: user._id,
    name: user.name,
  });
};

module.exports = createUserToken;
