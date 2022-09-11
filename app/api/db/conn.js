const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    "mongodb+srv://caixa:rHkpWKdUWTWW1eaT@cluster0.rnsitng.mongodb.net/Caixa?retryWrites=true&w=majority",
    (err) => {
      if (err) {
        return console.log("Ocorreu um erro ao se conectar com o banco.");
      }
      return console.log("Conectado ao banco.");
    }
  );
};

module.exports = connectToDatabase;
