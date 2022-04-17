import { Request, Response } from 'express';

export interface IPetsController {
  create(req: Request, res: Response): Promise<void>
  findAll(req: Request, res: Response): Promise<void>
  // delete(req: Request, res: Response): Promise<void>
}
