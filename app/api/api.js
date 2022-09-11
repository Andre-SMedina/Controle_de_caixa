const express = require("express");
const conn = require("./db/conn");
const Products = require("./models/Products");

const app = express();
conn();

app.get("/", (req, res) => {
  res.send("Olá");
});
app.get("/cad", (req, res) => {
  Products.create({
    name: "pao",
    brand: "vita",
    description: "diet",
    price: 2,
  });
  res.send("Produto cadastrado!");
});

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
