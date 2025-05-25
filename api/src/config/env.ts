import dotenv from "dotenv";
import { z } from "zod";

export const envSchema = z.object({
  PORT: z.string().default("3000").optional(),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

export const initEnv = () => {
  dotenv.config();
  return envSchema.parse(process.env);
};
