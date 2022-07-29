import AppDataSource from "../../database/dataSource"
import { ServiceCenterAddress } from "../../entities/ServiceCenterAddress";

type ServiceCenterAddressRequest = {
  address_id: number;
  service_center_id: number;
  street: string;
  number: number;
  address_complement: string;
  city_id: number;
}

export class UpdateServiceCenterAddresService {
  async execute({ address_id, service_center_id, street, number, address_complement, city_id }:ServiceCenterAddressRequest): Promise<ServiceCenterAddress | Error> {
    const repo = AppDataSource.getRepository(ServiceCenterAddress);    
    const serviceCenter = await repo.findOneBy({ address_id });

    if (!serviceCenter) {
      return new Error('Dado não encontrado.')
    }

    serviceCenter.service_center_id = service_center_id ? service_center_id :  serviceCenter.service_center_id;
    serviceCenter.street = street ? street :  serviceCenter.street;
    serviceCenter.number = number ? number :  serviceCenter.number;
    serviceCenter.address_complement = address_complement ? address_complement :  serviceCenter.address_complement;
    serviceCenter.city_id = city_id ? city_id :  serviceCenter.city_id;

    await repo.save(serviceCenter);

    return serviceCenter;
  }
}