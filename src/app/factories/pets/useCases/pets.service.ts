import { IPetModel } from '@domain/models/pets';
import { query } from '@infra/database';

import { IPetsService } from './IPetsService';

class PetsService implements IPetsService {
  async create({
    name, breed, gender, birth_date,
  }: IPetModel) {
    const [row] = await query(`
      INSERT INTO pets(name, breed, gender, birth_date)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, breed, gender, birth_date]);

    return row;
  }

  async findAll() {
    const rows = await query('SELECT * FROM pets ORDER BY name');
    return rows;
  }

  async findById(id: string) {
    const [row] = await query(`
      SELECT *
      FROM pets
      WHERE id = $1
    `, [id]);

    return row;
  }

  async delete(id: string) {
    await query(`
      UPDATE adopters
      SET pet_id = NULL
      WHERE pet_id = $1
    `, [id]);

    const deleteOp = await query(`
      DELETE FROM pets
      WHERE id = $1
    `, [id]) as [];

    return deleteOp;
  }
}

export default () => new PetsService();
