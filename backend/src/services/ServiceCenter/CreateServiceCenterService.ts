import AppDataSource from "../../database/dataSource"
import { ServiceCenter } from "../../entities/ServiceCenter";

type SeriveCenterRequest = {
  service_center_name: string;
  cnpj: string;
  email: string;
  password: string;
}

export class CreateServiceCenterService {
  async execute({ service_center_name, cnpj, email, password }:SeriveCenterRequest): Promise<ServiceCenter | Error> {
    const repo = AppDataSource.getRepository(ServiceCenter);
    const findByCnpj =  await repo.findOneBy({ cnpj });
    const findByEmail =  await repo.findOneBy({ email });

    if (findByCnpj) return new Error('CNPJ já cadastrado.')
    else if (findByEmail) return new Error('Email já cadastrado.');

    const serviceCenter = repo.create({ service_center_name, cnpj, email, password });

    await repo.save(serviceCenter);

    return serviceCenter;
  }
}