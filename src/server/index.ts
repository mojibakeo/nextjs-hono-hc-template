import { handle } from "hono/vercel";
import { factory } from "./factory";
import { healthCheckApi } from "./handlers/health_check";

export const runtime = "edge";

export const app = factory()
  .basePath("/api")
  .route("/hc", healthCheckApi)
  .get("/", (ctx) => ctx.json({ msg: "hello, world!" }));

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
