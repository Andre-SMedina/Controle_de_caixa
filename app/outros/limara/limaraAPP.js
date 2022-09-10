const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "limara")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "limara", "index.html"));
});
app.get("/products", function (req, res) {
  res.sendFile(path.join(__dirname, "limara", "index.html"));
});
app.get("/caixa", function (req, res) {
  res.sendFile(path.join(__dirname, "limara", "index.html"));
});
app.get("/balanco", function (req, res) {
  res.sendFile(path.join(__dirname, "limara", "index.html"));
});

app.listen(3002);
