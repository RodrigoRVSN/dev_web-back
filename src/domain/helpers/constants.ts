import 'dotenv/config';

export const PORT = process.env.PORT || 4000;
export const DB_HOST = process.env.DB_HOST ?? 'database';
export const DB_PORT = process.env.DB_PORT ?? 5432;
export const DB_DATABASE = process.env.DB_DATABASE ?? 'miakhats';
export const DB_USER = process.env.DB_USER ?? 'mia';
export const DB_PASSWORD = process.env.DB_PASSWORD ?? 'mia';

export const DB_URL = process.env.DATABASE_URL ?? 'postgres://mia:mia@database:5432/miakhats';
