import AppDataSource from "../../database/dataSource"
import { VolunteerAddress } from "../../entities/VolunteerAddress";

type VolunteerAddressRequest = {
  volunteer_id: number;
  street: string;
  number: number;
  address_complement: string;
  city_id: number;
}

export class CreateVolunteerAddressService {
  async execute({ volunteer_id, street, number, address_complement, city_id }:VolunteerAddressRequest): Promise<VolunteerAddress | Error> {
    const repo = AppDataSource.getRepository(VolunteerAddress);    

    const volunteerAddress = repo.create({ volunteer_id, street, number, address_complement, city_id });

    await repo.save(volunteerAddress);

    return volunteerAddress;
  }
}