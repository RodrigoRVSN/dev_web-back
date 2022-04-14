import { Client } from 'pg';

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'mia',
  password: 'khats',
  database: 'miakhats',
});

client.connect();

const query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};

export { query };
