const mongoose = require("mongoose");

async function connectToDatabase(user) {
  await mongoose.connect(
    `mongodb+srv://admin:gxZN4WK9S44XDk4T@cadastro.mixqe8i.mongodb.net/${user}?retryWrites=true&w=majority`,
    (err) => {
      if (err) {
        return console.log("Ocorreu um erro ao se conectar com o banco.");
      }
      return console.log("Conectado ao banco.");
    }
  );
}

module.exports = connectToDatabase;
