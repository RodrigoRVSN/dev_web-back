import { Request, Response, NextFunction } from 'express';

export const cors = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Acess-Control-Allow-Methods', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  response.setHeader('Access-Control-Max-Age', '10');
  next();
};
