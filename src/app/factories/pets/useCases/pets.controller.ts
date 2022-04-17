import { IPetModel } from '@domain/models/pets';
import { Request, Response } from 'express';

import { IPetsController } from './IPetsController';
import PetsService from './pets.service';

class PetsController implements IPetsController {
  async create(req: Request, res: Response) {
    const data = req.body as IPetModel;

    const pet = await PetsService().create(data);

    res.status(200).json({ pet });
  }

  async findAll(req: Request, res: Response) {
    const pet = await PetsService().findAll();

    res.status(200).json(pet);
  }
}

export default () => new PetsController();
