import 'dotenv/config';

export const PORT = process.env.PORT || 4000;
export const DB_URL = process.env.LOCAL === 'development' ? 'postgres://mia:mia@database:5432/miakhats' : process.env.DATABASE_URL;

export const {
  AWS_ACCESS_KEY, AWS_BUCKET, AWS_REGION, AWS_SECRET_ACCESS_KEY,
} = process.env;
