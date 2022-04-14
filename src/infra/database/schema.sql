CREATE DATABASE miakhats

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS animal (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  breed VARCHAR NOT NULL,
  gender VARCHAR NOT NULL,
  birth_date DATETIME,
  adopted_date DATETIME
)

CREATE TABLE IF NOT EXISTS adopter (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  phone VARCHAR NOT NULL,
  cpf VARCHAR,
  address DATETIME NOT NULL,
  adopted_date DATETIME NOT NULL,
  animal_id UUID,
  FOREIGN KEY(animal_id) REFERENCES animal(id) ON DELETE CASCADE
)  