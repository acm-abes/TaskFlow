// Initialise everything here
import { createServer } from "./app";
import { initEnv } from "./config/env";

// Init dotenv for environment variables
initEnv();
// Start the server
createServer();
