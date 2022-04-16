import { PORT } from 'config/constants';
import { logger } from 'config/logger';
import express from 'express';
import { query } from 'infra/database';

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  const rows = await query(`
    SELECT * FROM pets`);
  return res.json(rows);
});

app.listen(PORT, () => logger.info(`🔥 Server running in http://localhost:${PORT}`));
