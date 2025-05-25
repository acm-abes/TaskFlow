import { z } from "zod";
import { envSchema } from "../config/env";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
