import { Hono } from "hono";

export const factory = () => {
  return new Hono();
};
