import { IPetModel } from '@domain/models/pets';
import { IUploadFile, uploadFile } from '@infra/upload';
import { splitToDeleteS3Object } from '@infra/upload/fileUpload';
import { Request, Response } from 'express';

import { IPetsController } from './IPetsController';
import PetsService from './pets.service';

class PetsController implements IPetsController {
  async create(req: Request, res: Response) {
    const data = req.body as IPetModel;
    const uploadedImage = req.file;

    const { Location } = await uploadFile(uploadedImage) as unknown as IUploadFile;
    const pet = await PetsService().create({ ...data, image: Location });

    res.status(201).json({ pet });
  }

  async findAll(req: Request, res: Response) {
    const { orderBy } = req.query;

    const pets = await PetsService().findAll(String(orderBy));

    res.status(200).json(pets);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const pet = await PetsService().findById(id);

    res.status(200).json(pet);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const pet = await PetsService().findById(id);
    await PetsService().delete(id);
    splitToDeleteS3Object(pet.image);

    res.status(204).json({ message: 'O animal foi deletado' });
  }
}

export default () => new PetsController();
