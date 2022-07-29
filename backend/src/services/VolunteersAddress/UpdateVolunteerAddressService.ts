import AppDataSource from "../../database/dataSource"
import { VolunteerAddress } from "../../entities/VolunteerAddress";

type VolunteerAddressRequest = {
  address_id: number;
  volunteer_id: number;
  street: string;
  number: number;
  address_complement: string;
  city_id: number;
}

export class UpdateVolunteerAddressService {
  async execute({ address_id, volunteer_id, street, number, address_complement, city_id }:VolunteerAddressRequest): Promise<VolunteerAddress | Error> {
    const repo = AppDataSource.getRepository(VolunteerAddress);    
    const volunteerAddress = await repo.findOneBy({ address_id });

    if (!volunteerAddress) return new Error('Dado não encontrado.');

    volunteerAddress.volunteer_id = volunteer_id ? volunteer_id :  volunteerAddress.volunteer_id;
    volunteerAddress.street = street ? street :  volunteerAddress.street;
    volunteerAddress.number = number ? number :  volunteerAddress.number;
    volunteerAddress.address_complement = address_complement ? address_complement :  volunteerAddress.address_complement;
    volunteerAddress.city_id = city_id ? city_id :  volunteerAddress.city_id;

    await repo.save(volunteerAddress);

    return volunteerAddress;
  }
}