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

  async findById(id) {
    const [row] = await query(`
      SELECT *
      FROM categories
      WHERE id = $1
    `, [id]);

    return row;
  }

  async delete(id) {
    await query(`
      UPDATE contacts
      SET category_id = NULL
      WHERE category_id = $1
    `, [id]);

    const deleteOp = await query(`
      DELETE FROM categories
      WHERE id = $1
    `, [id]);

    return deleteOp;
  }

  async update(id, name) {
    const [row] = await query(`
      UPDATE categories
      SET name = $1
      WHERE id = $2
      RETURNING *
    `, [name, id]);

    return row;
  }
}

export default () => new PetsService();
