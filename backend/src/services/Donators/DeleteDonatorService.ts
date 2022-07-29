import AppDataSource from "../../database/dataSource"
import { Donator } from "../../entities/Donator";

type DonatorRequest = {
  donator_id: number;
}

export class DeleteDonatorService {
  async execute({ donator_id }:DonatorRequest): Promise<Donator | Error> {
    const repo = AppDataSource.getRepository(Donator);    

    if (!(await repo.findOneBy({ donator_id }))) {
      return new Error('Dado não encontrado.')
    }    

    await repo.delete(donator_id);

    return repo;
  }
}