import AppDataSource from "../../database/dataSource"
import { ServiceCenter } from "../../entities/ServiceCenter";

type ServiceCenterRequest = {
  service_center_id: string;
}
export class DeleteServiceCenterService {
  async execute({ service_center_id }:ServiceCenterRequest): Promise<ServiceCenter | Error> {
    const repo = AppDataSource.getRepository(ServiceCenter);    

    if (!(await repo.findOneBy({ service_center_id }))) {
      return new Error('Centro de Atendimento não encontrado.')
    }    

    await repo.delete(service_center_id);

    return repo;
  }
}