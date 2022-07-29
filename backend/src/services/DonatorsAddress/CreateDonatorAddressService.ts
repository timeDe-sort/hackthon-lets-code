import AppDataSource from "../../database/dataSource"
import { DonatorAddress } from "../../entities/DonatorAddress";

type DonatorAddressRequest = {
  donator_id: number;
  street: string;
  number: number;
  address_complement: string;
  city_id: number;
}

export class CreateDonatorAddressService {
  async execute({ donator_id, street, number, address_complement, city_id }:DonatorAddressRequest): Promise<DonatorAddress | Error> {
    const repo = AppDataSource.getRepository(DonatorAddress);    

    const donatorAddress = repo.create({ donator_id, street, number, address_complement, city_id });

    await repo.save(donatorAddress);

    return donatorAddress;
  }
}