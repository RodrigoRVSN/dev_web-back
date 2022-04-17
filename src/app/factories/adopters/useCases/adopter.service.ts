import { IAdopterModel } from '@domain/models/adopters';
import { query } from '@infra/database';

import { IAdopterService } from './IAdopterService';

class AdopterService implements IAdopterService {
  async create({
    name, phone, cpf, address, pet_id,
  }: IAdopterModel) {
    const dateNow = new Date() as unknown as string;

    const [row] = await query(`
      INSERT INTO adopters(name, phone, cpf, address, adopted_date)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *
    `, [name, phone, cpf, address, dateNow]);

    await query(`
      UPDATE pets
      SET adopter_id = $1
      WHERE id = $2
    `, [row.id, pet_id]);

    return row;
  }

  async findAll() {
    const rows = await query('SELECT * FROM adopters ORDER BY name');
    return rows;
  }

  async findById(id: string) {
    const [row] = await query(`
      SELECT *
      FROM adopters
      WHERE id = $1
    `, [id]);

    return row;
  }

  async delete(id: string) {
    const deleteOp = await query(`
      DELETE 
      FROM adopters
      WHERE id = $1
    `, [id]);

    return deleteOp;
  }
}

export default () => new AdopterService();
