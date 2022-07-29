import AppDataSource from "../../database/dataSource"
import { ServiceCenter } from "../../entities/ServiceCenter";

export class GetSchoolYearsService {
  async execute() {
    const repo = AppDataSource.getRepository(ServiceCenter);    
    const serviceCenter = await repo.find();
    return serviceCenter;
  }
}