CREATE DATABASE miakhats;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS adopters (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  phone VARCHAR NOT NULL,
  cpf VARCHAR,
  address VARCHAR NOT NULL,
  adopted_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS pets (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  breed VARCHAR NOT NULL,
  gender VARCHAR NOT NULL,
  birth_date DATE,
  age_group VARCHAR NOT NULL,
  adopter_id UUID,
  FOREIGN KEY(adopter_id) REFERENCES adopters(id) ON DELETE CASCADE
);