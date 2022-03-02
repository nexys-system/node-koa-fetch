import Koa from "koa";

import { port } from "./config";
import Router from "./router";

const app = new Koa();

app.use(Router);

app.listen(port, () => {
  console.log("=== Server launched on port " + port + " ===");
});
