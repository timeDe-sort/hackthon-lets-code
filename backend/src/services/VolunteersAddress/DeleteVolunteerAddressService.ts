import AppDataSource from "../../database/dataSource"
import { VolunteerAddress } from "../../entities/VolunteerAddress";

type VolunteerAddressRequest = {
  address_id: number;
}

export class DeleteVolunteerAddressService {
  async execute({ address_id }:VolunteerAddressRequest): Promise<VolunteerAddress | Error> {
    const repo = AppDataSource.getRepository(VolunteerAddress);    

    if (!(await repo.findOneBy({ address_id }))) return new Error('Dado não encontrado.');

    await repo.delete(address_id);
    return repo;
  }
}