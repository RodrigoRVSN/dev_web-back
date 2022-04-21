import { logger } from '@app/config/logger';
import { STATUS } from '@domain/helpers/constants';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (error, req, res, next) => {
  logger.error(`Error handler! ⚠️ -> ${error}`);
  res.sendStatus(STATUS.SERVER_ERROR);
};
