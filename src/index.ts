import { config } from './config/default';

global.config = { ...config };

import { AppDataSource } from './data-source';
import logger from './bootstrap/logger';
import app from './bootstrap/express';
const PORT = config.port;

AppDataSource.initialize()
  .then(() => {
    logger.info('database connection created');
    app.listen(PORT, () => {
      logger.info(`Server running at ${PORT}`);
    });
  })
  .catch((error: Error) => {
    logger.error(`Database connection failed with error ${error}`);
  });
