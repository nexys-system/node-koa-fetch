import Router from "koa-router";

const router = new Router();

router.get("/", async (ctx) => {
  ctx.body = { msg: "hello" };
});

export default router.routes();
