import setupSwagger from '@app/config/config-swagger';
import { logger } from '@app/config/logger';
import setupMiddlewares from '@app/config/middlewares';
import setupRoutes from '@app/config/routes';
import { PORT } from '@domain/helpers/constants';
import express from 'express';
import 'express-async-errors';

const app = express();

setupSwagger(app);
setupMiddlewares(app);
setupRoutes(app);

app.listen(PORT, () => logger.info(`🔥 Server running in http://localhost:${PORT}`));
