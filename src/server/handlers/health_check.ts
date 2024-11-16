import { factory } from "../factory";
import { hcQueryValidator } from "../presenters/hc_query";

const api = factory().get("/", hcQueryValidator, (ctx) =>
  ctx.json({ status: ctx.req.valid("query").q || "ok" }),
);

export { api as healthCheckApi };
