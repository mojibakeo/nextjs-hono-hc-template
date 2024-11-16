import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

export const hcQueryValidator = zValidator(
  "query",
  z.object({ q: z.string().optional() }),
);
