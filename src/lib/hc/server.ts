import { AppType } from "@/server/types";
import { hc } from "hono/client";
import { headers } from "next/headers";

export const serverHc = async () =>
  hc<AppType>(process.env.APP_BASE_URL || "http://localhost:8080", {
    init: {
      credentials: "include",
      headers: await headers(),
    },
  }).api;
