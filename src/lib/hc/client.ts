import { AppType } from "@/server/types";
import { hc } from "hono/client";

export const clientHc = () =>
  hc<AppType>(process.env.APP_BASE_URL || "http://localhost:8080").api;
