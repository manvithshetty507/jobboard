import { app } from "./app";
import { log } from "./app";

const start = (): void => {
  app.get('/health', (req, res) => {
    log.info('Health check called');
    res.send('Notification service running');
  });

  const PORT = process.env.PORT || 4001;

  app.listen(PORT, () => {
    log.info(`Notification service started on port ${PORT}`);
  });
};

start();