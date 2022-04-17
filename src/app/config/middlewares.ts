import { bodyParser, cors } from '@app/middlewares';
import { Express } from 'express';

export default (app: Express): void => {
  app.use(bodyParser);
  app.use(cors);
};
