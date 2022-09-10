const cors = require("cors");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("taianir.json");

server.use(cors({ credentials: true, origin: "http://localhost:3052" }));

server.use(router);
server.listen(3051, () => {
  console.log("JSON Server is running");
});
