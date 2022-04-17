import { IPetModel } from '@domain/models/pets';

export interface IPetsService {
  create(data: IPetModel): Promise<IPetModel>
  findAll(req: Request, res: Response): Promise<IPetModel[]>
  delete(req: Request, res: Response): Promise<IPetModel>
  findById(id: string): Promise<IPetModel>
}
