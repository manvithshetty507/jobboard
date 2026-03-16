import express from "express";
import { winstonLogger } from "@jobber_app_lib/common";
import { Logger } from "winston";
import { config } from "./configs/config";

const app = express();

export const log: Logger = winstonLogger(
  config.ELASTIC_SEARCH_URL,
  'notification-service',
  'info'
);

app.get('/health', (req, res) => {

  log.info('Health check request', {
    service: 'notification-service',
    route: '/health'
  });

  res.send('Notification service running');
});

export { app };