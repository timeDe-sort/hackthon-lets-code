import AppDataSource from "../../database/dataSource"
import { Donator } from "../../entities/Donator";

export class GetDonatorsService {
  async execute() {
    const repo = AppDataSource.getRepository(Donator);    
    const donators = await repo.find();
    return donators;
  }
}