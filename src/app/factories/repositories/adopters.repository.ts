import { Request, Response } from 'express';

export interface IAdopterController {
  create(req: Request, res: Response): Promise<void>
  findAll(req: Request, res: Response): Promise<void>
  findById(req: Request, res: Response): Promise<void>
  delete(req: Request, res: Response): Promise<void>
}
