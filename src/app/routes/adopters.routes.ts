import adopterController from '@app/factories/adopters/useCases/adopter.controller';
import { Router } from 'express';

const adoptersRoutes = Router();

adoptersRoutes.get('/', adopterController().findAll);
adoptersRoutes.get('/:id', adopterController().findById);
adoptersRoutes.post('/create', adopterController().create);
adoptersRoutes.delete('/:id', adopterController().delete);

export { adoptersRoutes };
