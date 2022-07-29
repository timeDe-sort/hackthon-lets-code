import AppDataSource from "../../database/dataSource"
import { Donation } from "../../entities/Donation";

export class GetDonationService {
  async execute() {
    const repo = AppDataSource.getRepository(Donation);    
    const schoolYears = await repo.find();
    return schoolYears;
  }
}