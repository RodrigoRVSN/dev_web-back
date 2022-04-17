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

  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const rows = await query(`
      SELECT pets.*, 
        adopters.name AS adopter_name, 
        adopters.phone AS adopter_phone, 
        adopters.cpf AS adopter_cpf, 
        adopters.address AS adopter_address, 
        adopters.adopted_date AS adopted_date
      FROM pets 
      LEFT JOIN adopters ON adopters.id = pets.adopter_id
      ORDER BY pets.name ${direction}
    `);
    return rows;
  }

  async findById(id: string) {
    const [row] = await query(`
      SELECT pets.*, 
        adopters.name AS adopter_name, 
        adopters.phone AS adopter_phone, 
        adopters.cpf AS adopter_cpf, 
        adopters.address AS adopter_address, 
        adopters.adopted_date AS adopted_date
      FROM pets 
      LEFT JOIN adopters ON adopters.id = pets.adopter_id
      WHERE pets.id = $1
    `, [id]);

    return row;
  }

  async delete(id: string) {
    const deleteOp = await query(`
      DELETE 
      FROM pets
      WHERE id = $1
    `, [id]) as [];

    return deleteOp;
  }
}

export default () => new PetsService();
