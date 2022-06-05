import { IPetsController } from '@app/factories/repositories/pets.repository';
import { AppError } from '@domain/errors/AppError';
import { STATUS } from '@domain/helpers/constants';
import { formatEmptyValues } from '@domain/helpers/utils/formatEmptyValues';
import { IPetModel } from '@domain/models/pets';
import { IUploadFile, uploadFile, splitToDeleteS3Object } from '@infra/upload';
import { Request, Response } from 'express';

import PetsService from './pets.service';

class PetsController implements IPetsController {
  async create(req: Request, res: Response) {
    const data = req.body as IPetModel;
    const uploadedImage = req.file;

    formatEmptyValues(data);

    const image = await uploadFile(uploadedImage) as unknown as IUploadFile;
    const pet = await PetsService().create({ ...data, image: image?.Location });

    res.status(STATUS.CREATED_CONTENT).json(pet);
  }

  async findAll(req: Request, res: Response) {
    const { orderBy } = req.query;

    const pets = await PetsService().findAll(String(orderBy));

    res.status(STATUS.SUCCESS).json(pets);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const pet = await PetsService().findById(id);

    res.status(STATUS.SUCCESS).json(pet);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const pet = await PetsService().findById(id);

    if (!pet) {
      throw new AppError('Animal não encontrado', STATUS.NOT_FOUND);
    }

    await PetsService().delete(id);

    if (pet.image) {
      splitToDeleteS3Object(pet.image);
    }

    res.status(STATUS.EMPTY_CONTENT).send();
  }
}

export default () => new PetsController();
