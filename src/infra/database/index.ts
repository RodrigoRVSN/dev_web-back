import {
  DB_URL,
} from '@domain/helpers/constants';
import { Client } from 'pg';

const client = new Client({
  connectionString: DB_URL,
  ssl: { rejectUnauthorized: false },
});

client.connect();

const query = async (query: string, values?: unknown[]) => {
  const { rows } = await client.query(query, values);
  return rows;
};

export { query };
