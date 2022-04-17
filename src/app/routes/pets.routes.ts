import petsController from '@app/factories/pets/useCases/pets.controller';
import { Router } from 'express';

const petsRoutes = Router();

petsRoutes.get('/', petsController().findAll);
petsRoutes.get('/:id', petsController().findById);
petsRoutes.post('/create', petsController().create);
petsRoutes.delete('/:id', petsController().delete);

export { petsRoutes };
