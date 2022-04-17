import { IAdopterModel } from '@domain/models/adopters';

export interface IAdopterService {
  create(data: IAdopterModel): Promise<IAdopterModel>
  findAll(): Promise<IAdopterModel[]>
  findById(id: string): Promise<IAdopterModel>
}
