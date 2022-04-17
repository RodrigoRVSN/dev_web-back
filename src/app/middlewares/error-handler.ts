import { logger } from '@app/config/logger';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (error, req, res, next) => {
  logger.error(`Error handler! ⚠️ -> ${error}`);
  res.sendStatus(500);
};
