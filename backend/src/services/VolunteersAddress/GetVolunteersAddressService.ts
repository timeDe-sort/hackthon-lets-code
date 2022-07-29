import AppDataSource from "../../database/dataSource"
import { VolunteerAddress } from "../../entities/VolunteerAddress";

export class GetVolunteersAddressService {
  async execute() {
    const repo = AppDataSource.getRepository(VolunteerAddress);    
    const volunteerAddress = await repo.find();
    return volunteerAddress;
  }
}