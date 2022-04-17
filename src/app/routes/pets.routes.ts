import { Router } from 'express';

const petsRoutes = Router();

petsRoutes.get('/');
petsRoutes.post('/create');
petsRoutes.delete('/:id');

export { petsRoutes };
