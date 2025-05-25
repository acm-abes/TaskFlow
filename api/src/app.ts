// Setup Express server with CORS and JSON parsing
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { logger } from "./utils/logger";
import { authRouter } from "./modules/auth/auth.routes";

export const createServer = () => {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const PORT = process.env.PORT || 3000;

  // Base router
  const indexRouter = express.Router();
  app.use("/api", indexRouter);

  // Add all routes here
  indexRouter.use("/auth", authRouter);

  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
};
