import { STATUS } from '@domain/helpers/constants';
import { formatEmptyValues } from '@domain/helpers/utils/formatEmptyValues';
import { IAdopterModel } from '@domain/models/adopters';
import { Request, Response } from 'express';

import AdopterService from './adopter.service';
import { IAdopterController } from './IAdopterController';

class AdopterController implements IAdopterController {
  async create(req: Request, res: Response) {
    const data = req.body as IAdopterModel;

    formatEmptyValues(data);

    const adopter = await AdopterService().create(data);

    res.status(STATUS.CREATED_CONTENT).json({ adopter });
  }

  async findAll(req: Request, res: Response) {
    const adopter = await AdopterService().findAll();

    res.status(STATUS.SUCCESS).json(adopter);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const adopter = await AdopterService().findById(id);

    res.status(STATUS.SUCCESS).json(adopter);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const adopter = await AdopterService().delete(id);

    res.status(STATUS.EMPTY_CONTENT).json(adopter);
  }
}

export default () => new AdopterController();
