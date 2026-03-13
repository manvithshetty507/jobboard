import express from "express";
import { logger } from "./logger";

const app = express();

app.get('/health', (req, res) => {

  logger.info('Request received', {
    service: 'test-service',
    route: '/'
  });

  res.send('Hello');
});
export { app };