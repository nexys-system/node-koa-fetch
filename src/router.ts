import Router from "koa-router";

import PublicRoutes from "./routes";

const router = new Router();

router.use(PublicRoutes);

export default router.routes();
