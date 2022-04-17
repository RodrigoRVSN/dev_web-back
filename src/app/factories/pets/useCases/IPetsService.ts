import { IPetModel } from '@domain/models/pets';

export interface IPetsService {
  create(data: IPetModel): Promise<IPetModel>
  findAll(): Promise<IPetModel[]>
  findById(id: string): Promise<IPetModel>
  delete(id: string): Promise<any>
}
