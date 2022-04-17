import { adoptersRoutes, petsRoutes } from '@app/routes';
import { Router, Express } from 'express';

export default (app: Express) => {
  const router = Router();

  router.use('/adopters', adoptersRoutes);
  router.use('/pets', petsRoutes);

  app.use(router);
};
