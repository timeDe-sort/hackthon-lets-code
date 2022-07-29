import AppDataSource from "../../database/dataSource"
import { ServiceCenter } from "../../entities/ServiceCenter";

type ServiceCenterRequest = {
  service_center_id: number;
  service_center_name: string;
  cnpj: string;
  email: string;
  password: string;
}

export class UpdateServiceCenterService {
  async execute({ service_center_id, service_center_name, cnpj, email, password }:ServiceCenterRequest): Promise<ServiceCenter | Error> {
    const repo = AppDataSource.getRepository(ServiceCenter);    
    const serviceCenter = await repo.findOneBy({ service_center_id });

    if (!serviceCenter) {
      return new Error('Centro de Atendimento não encontrado.')
    }

    serviceCenter.service_center_name = service_center_name ? service_center_name : serviceCenter.service_center_name;
    serviceCenter.cnpj = cnpj ? cnpj : serviceCenter.cnpj;
    serviceCenter.email = email ? email : serviceCenter.email;
    serviceCenter.password = password ? password : serviceCenter.password;

    await repo.save(serviceCenter);

    return serviceCenter;
  }
}