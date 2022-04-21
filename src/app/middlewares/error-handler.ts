/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppError } from '@domain/errors/AppError';
import { STATUS } from '@domain/helpers/constants';
import {
  NextFunction, Request, Response,
} from 'express';

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  return res.status(STATUS.SERVER_ERROR).json({
    status: 'error',
    message: `Internal server error - ${error.message}`,
  });
};
