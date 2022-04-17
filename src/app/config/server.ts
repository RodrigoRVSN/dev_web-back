import { logger } from '@app/config/logger';
import setupMiddlewares from '@app/config/middlewares';
import { PORT } from '@domain/helpers/constants';
import express from 'express';

const app = express();

setupMiddlewares(app);

app.listen(PORT, () => logger.info(`🔥 Server running in http://localhost:${PORT}`));
