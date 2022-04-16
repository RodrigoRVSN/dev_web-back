import { PORT } from '@infra/config/constants';
import { logger } from '@infra/config/logger';
import { query } from '@infra/database';
import express from 'express';

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  const rows = await query(`
    SELECT * FROM pets`);
  return res.json(rows);
});

app.listen(PORT, () => logger.info(`🔥 Server running in http://localhost:${PORT}`));
