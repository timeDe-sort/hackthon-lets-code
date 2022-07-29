import AppDataSource from "../../database/dataSource"
import { ServiceCenterAddress } from "../../entities/ServiceCenterAddress";

export class GetDonatorsAddressService {
  async execute() {
    const repo = AppDataSource.getRepository(ServiceCenterAddress);    
    const serviceCenterAddress = await repo.find();
    return serviceCenterAddress;
  }
}