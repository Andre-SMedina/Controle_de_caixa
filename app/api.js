const cors = require("cors");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

server.use(cors({ credentials: true, origin: "http://54.209.185.105:3000" }));

server.use(router);
server.listen(5000, () => {
  console.log("JSON Server is running");
});
