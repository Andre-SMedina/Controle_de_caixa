const getToken = (req) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      return token;
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = getToken;
