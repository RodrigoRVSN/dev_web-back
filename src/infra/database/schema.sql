CREATE DATABASE miakhats;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS pets (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  breed VARCHAR NOT NULL,
  gender VARCHAR NOT NULL,
  birth_date DATE NOT NULL,
  adopted_date DATE
);

CREATE TABLE IF NOT EXISTS adopters (
  id UUID NOT NULL DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  phone VARCHAR NOT NULL,
  cpf VARCHAR,
  address VARCHAR NOT NULL,
  pet_id UUID,
  FOREIGN KEY(pet_id) REFERENCES pets(id) ON DELETE CASCADE
);  