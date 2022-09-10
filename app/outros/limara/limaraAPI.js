import cors from "cors";
import { create, router as _router } from "json-server";
const server = create();
const router = _router("limara.json");

server.use(cors({ credentials: true, origin: "http://localhost:3002" }));

server.use(router);
server.listen(3001, () => {
  console.log("JSON Server is running");
});
