const express = require("express");
const conn = require("./db/conn");
const cors = require("cors");

const Products = require("./models/Products");
const Temporary = require("./models/Temporary");
const Caixa = require("./models/Caixa");

const app = express();
conn();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

app.post("/cad", async (req, res) => {
  const product = req.body;
  let max = 0;

  const find = await Products.find({});

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

  product.price = parseFloat(product.price);

  await Products.create(product);

  res.send("Produto cadastrado!");
});

app.post("/caixa", async (req, res) => {
  const registerBuy = req.body;

  await Caixa.create(registerBuy);

  res.send("ok");
});

app.get("/find/:id", async (req, res) => {
  const data = req.params.id.split("-");
  let find = [];

  if (data.length) {
    const name = data[1] !== "undefined" ? new RegExp(data[1]) : new RegExp("");
    const brand =
      data[2] !== "undefined" ? new RegExp(data[2]) : new RegExp("");
    const description =
      data[3] !== "undefined" ? new RegExp(data[3]) : new RegExp("");
    const cod = data[0];

    if ((cod !== "undefined") & (cod !== "")) {
      find = await Products.find({ cod });
    } else {
      find = await Products.find({
        name,
        brand,
        description,
      }).sort({ name: "asc" });
    }
  }

  res.send(find);
});

app.get("/temp", async (req, res) => {
  const data = await Temporary.findOne({});
  res.send(data);
});

app.patch("/edit", async (req, res) => {
  const product = req.body;

  await Products.findByIdAndUpdate({ _id: product._id }, product);

  res.send("ok");
});

app.patch("/temp", async (req, res) => {
  const body = req.body;

  await Temporary.findByIdAndUpdate({ _id: "631fcadf5a0b6b0514735dd3" }, body);

  res.send("ok");
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await Products.findByIdAndDelete({ _id: id });
  const list = await Products.find({}).sort({ name: "asc" });

  res.send(list);
});

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
