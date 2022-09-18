const express = require("express");
const conn = require("./db/conn");
const cors = require("cors");
const getUserByToken = require("./helpers/get-user-by-token");
const getToken = require("./helpers/get-token");
require("dotenv").config();

const Products = require("./models/Products");
const Temporary = require("./models/Temporary");
const Caixa = require("./models/Caixa");

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
conn("Caixa");

//authetication
const UserRoutes = require("./routes/UserRoutes");
const Users = require("./models/User");

app.use("/users", UserRoutes);

// other routes
app.post("/cad", async (req, res) => {
  const token = getToken(req);
  const product = req.body;
  let max = 0;
  const user = await getUserByToken(token);

  if (!user) {
    return res.status(401).json({ message: "acesso negado" });
  }

  const find = await Products.find({ userId: user._id });

  if (!find.length) {
    product.cod = 1;
  } else {
    find.forEach((item) => {
      if (max) {
        max = item.cod;
      }
      if (item.cod > max) {
        max = item.cod;
      }
    });
  }

  product.cod = max + 1;
  product.userId = user._id;

  product.price = parseFloat(product.price);

  await Products.create(product);

  res.send("Produto cadastrado!");
});

app.post("/caixa", async (req, res) => {
  const registerBuy = req.body;

  await Caixa.create(registerBuy);

  res.send("ok");
});

app.post("/temp", async (req, res) => {
  const data = req.body;

  await Temporary.create(data);

  res.send("ok");
});

app.post("/find", async (req, res) => {
  const token = getToken(req);
  const data = req.body;
  const user = await getUserByToken(token);
  let founded = [];

  if (!user) {
    return res.status(401).json({ message: "acesso negado" });
  }

  if (data.cod) {
    founded = await Products.find({ userId: user._id, cod: data.cod });
  } else {
    const name = data.name ? new RegExp(data.name) : new RegExp("");
    const brand = data.brand ? new RegExp(data.brand) : new RegExp("");
    const description = data.description
      ? new RegExp(data.description)
      : new RegExp("");

    founded = await Products.find({
      userId: user._id,
      name,
      brand,
      description,
    }).sort({ name: "asc" });
  }

  res.send(founded);
});

app.get("/temp", async (req, res) => {
  const token = getToken(req);
  const user = await getUserByToken(token);

  if (!user) {
    return res.status(401).json({ message: "acesso negado" });
  }

  let data = await Temporary.findOne({ userId: user._id });

  if (!data) {
    data = {
      userId: user._id,
      listBuy: [],
      total: "0,00",
    };
    await Temporary.create(data);
  }

  res.send(data);
});

app.get("/balanco/:date", async (req, res) => {
  const token = getToken(req);
  const user = await getUserByToken(token);

  if (!user) {
    return res.status(401).json({ message: "acesso negado" });
  }

  const date = new RegExp(req.params.date.split("-").join("/"));
  const founded = await Caixa.find({ userId: user._id, date });

  res.send(founded);
});

app.patch("/edit", async (req, res) => {
  const product = req.body;

  await Products.findByIdAndUpdate({ _id: product._id }, product);
  res.send("ok");
});

app.patch("/temp", async (req, res) => {
  const token = getToken(req);
  const list = req.body;
  const user = await getUserByToken(token);

  if (!user) {
    return res.status(401).json({ message: "acesso negado" });
  }

  await Temporary.updateOne({ userId: user._id }, list);

  res.status(200).json({ message: "Registro efetuado." });
});

app.delete("/delete/:id", async (req, res) => {
  const _id = req.params.id;
  const userId = (await Products.findOne({ _id })).userId;
  await Products.findByIdAndDelete({ _id });
  const list = await Products.find({ userId }).sort({ name: "asc" });

  res.send(list);
});

app.delete("/caixa/delete/:id", async (req, res) => {
  const _id = req.params.id;

  await Caixa.findByIdAndDelete({ _id });

  res.send("ok");
});

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
