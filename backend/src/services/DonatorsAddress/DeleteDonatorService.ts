import AppDataSource from "../../database/dataSource"
import { DonatorAddress } from "../../entities/DonatorAddress";

type DonatorAddressRequest = {
  address_id: number;
}

export class DeleteSchoolYearService {
  async execute({ address_id }:DonatorAddressRequest): Promise<DonatorAddress | Error> {
    const repo = AppDataSource.getRepository(DonatorAddress);    

    if (!(await repo.findOneBy({ address_id }))) {
      return new Error('Dado não encontrado.')
    }    

    await repo.delete(address_id);
    return repo;
  }
}