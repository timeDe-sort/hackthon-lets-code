import AppDataSource from "../../database/dataSource"
import { ServiceCenterAddress } from "../../entities/ServiceCenterAddress";

type ServiceCenterAddressRequest = {
  address_id: number;
}

export class DeleteServiceCenterAddressService {
  async execute({ address_id }:ServiceCenterAddressRequest): Promise<ServiceCenterAddress | Error> {
    const repo = AppDataSource.getRepository(ServiceCenterAddress);    

    if (!(await repo.findOneBy({ address_id }))) {
      return new Error('Endereço não encontrado.')
    }    

    await repo.delete(address_id);
    return repo;
  }
}