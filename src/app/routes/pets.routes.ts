import petsController from '@app/factories/pets/useCases/pets.controller';
import { upload } from '@infra/upload/fileUpload';
import { Router } from 'express';

const petsRoutes = Router();

petsRoutes.get('/', petsController().findAll);
petsRoutes.get('/:id', petsController().findById);
petsRoutes.post('/create', upload.single('image'), petsController().create);
petsRoutes.delete('/remove/:id', petsController().delete);

export { petsRoutes };
