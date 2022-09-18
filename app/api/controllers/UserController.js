const Users = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//import helpers
const createUserToken = require("../helpers/create-user-token");

class UserController {
  static async register(req, res) {
    const { name, email, password, confirmpassword } = req.body;

    if (!name || !email || !password || !confirmpassword) {
      return res.status(422).json({ message: "Preencha todos os campos!" });
    }

    if (password !== confirmpassword) {
      res.status(422).json({ message: "As senhas não são iguais!" });
      return;
    }

    // check if user exists
    const userExists = await Users.findOne({ email: email });

    if (userExists) {
      res.status(422).json({ message: "E-mail já cadastrado!" });
      return;
    }

    // create password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    try {
      await Users.create([
        {
          name: name,
          email: email,
          password: passwordHash,
        },
      ]);

      const newUser = await Users.findOne({ email: email });

      await createUserToken(newUser, req, res);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(422).json({ message: "Preencha todos os campos!" });
      return;
    }

    // check if user exists
    const user = await Users.findOne({ email });

    if (!user) {
      res.status(422).json({ message: "E-mail ou senha incorreto!" });
      return;
    }

    //check if password match with db password
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      res.status(422).json({ message: "E-mail ou senha incorreto!" });
      return;
    }

    await createUserToken(user, req, res);
  }
}

module.exports = UserController;
