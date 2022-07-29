import AppDataSource from "../../database/dataSource"
import { ServiceCenterAddress } from "../../entities/ServiceCenterAddress";

type ServiceCenterAddressRequest = {
  service_center_id: number;
  street: string;
  number: number;
  address_complement: string;
  city_id: number;
}

export class CreateServiceCenterAddressService {
  async execute({ service_center_id, street, number, address_complement, city_id }:ServiceCenterAddressRequest): Promise<ServiceCenterAddress | Error> {
    const repo = AppDataSource.getRepository(ServiceCenterAddress);    

    const serviceCenterAddress = repo.create({ service_center_id, street, number, address_complement, city_id });

    await repo.save(serviceCenterAddress);

    return serviceCenterAddress;
  }
}