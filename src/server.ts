import { PORT } from 'config/constants';
import { logger } from 'config/logger';
import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'coe' });
});

app.listen(PORT, () => logger.info(`🔥 Server running in http://localhost:${PORT}`));
