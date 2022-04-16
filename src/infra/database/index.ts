import { Client } from 'pg';

const client = new Client({
  host: 'database',
  port: 5432,
  user: 'mia',
  password: 'mia',
  database: 'miakhats',
});

client.connect();

const query = async (query: string, values?: string[]) => {
  const { rows } = await client.query(query, values);
  return rows;
};

export { query };
