import AppDataSource from "../../database/dataSource"
import { DonatorAddress } from "../../entities/DonatorAddress";

export class GetDonatorsAddressService {
  async execute() {
    const repo = AppDataSource.getRepository(DonatorAddress);    
    const donatorsAddress = await repo.find();
    return donatorsAddress;
  }
}