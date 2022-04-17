import { IAdopterModel } from '@domain/models/adopters';
import { query } from '@infra/database';

import { IAdopterService } from './IAdopterService';

class AdopterService implements IAdopterService {
  async create({
    name, phone, pet_id, cpf, address,
  }: IAdopterModel) {
    const dateNow = new Date() as unknown as string;

    await query(`
      UPDATE pets
      SET adopted_date = $1
      WHERE id = $2
    `, [dateNow, pet_id]);

    const [row] = await query(`
      INSERT INTO adopters(name, phone, pet_id, cpf, address)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *
    `, [name, phone, pet_id, cpf, address]);

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
    await query(`
      UPDATE pets
      SET adopted_date = NULL
      FROM adopters
      WHERE adopters.pet_id = pets.id
    `, []);

    const deleteOp = await query(`
      DELETE 
      FROM adopters
      WHERE id = $1
    `, [id]);

    return deleteOp;
  }
}

export default () => new AdopterService();
