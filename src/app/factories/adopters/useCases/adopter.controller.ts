import { IAdopterModel } from '@domain/models/adopters';
import { Request, Response } from 'express';

import AdopterService from './adopter.service';
import { IAdopterController } from './IAdopterController';

class AdopterController implements IAdopterController {
  async create(req: Request, res: Response) {
    const data = req.body as IAdopterModel;

    const adopter = await AdopterService().create(data);

    res.status(201).json({ adopter });
  }

  async findAll(req: Request, res: Response) {
    const adopter = await AdopterService().findAll();

    res.status(200).json(adopter);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const adopter = await AdopterService().findById(id);

    res.status(200).json(adopter);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const adopter = await AdopterService().delete(id);

    res.status(204).json(adopter);
  }
}

export default () => new AdopterController();
