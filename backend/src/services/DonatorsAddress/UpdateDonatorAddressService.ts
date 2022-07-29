import AppDataSource from "../../database/dataSource"
import { DonatorAddress } from "../../entities/DonatorAddress";

type DonatorAddressRequest = {
  address_id: number;
  donator_id: number;
  street: string;
  number: number;
  address_complement: string;
  city_id: number;
}

export class UpdateDonatorAddressService {
  async execute({ address_id, donator_id, street, number, address_complement, city_id }:DonatorAddressRequest): Promise<DonatorAddress | Error> {
    const repo = AppDataSource.getRepository(DonatorAddress);    
    const donatorAddress = await repo.findOneBy({ address_id });

    if (!donatorAddress) {
      return new Error('Dado não encontrado.')
    }

    donatorAddress.donator_id = donator_id ? donator_id :  donatorAddress.donator_id;
    donatorAddress.street = street ? street :  donatorAddress.street;
    donatorAddress.number = number ? number :  donatorAddress.number;
    donatorAddress.address_complement = address_complement ? address_complement :  donatorAddress.address_complement;
    donatorAddress.city_id = city_id ? city_id :  donatorAddress.city_id;

    await repo.save(donatorAddress);

    return donatorAddress;
  }
}