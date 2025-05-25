// Setup Express server with CORS and JSON parsing
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { logger } from "./utils/logger";

export const createServer = () => {
  const app = express();

  // Enable CORS for all routes
  app.use(cors());

  // Parse JSON bodies
  app.use(bodyParser.json());
  // Parse URL-encoded bodies
  app.use(bodyParser.urlencoded({ extended: true }));

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
};
