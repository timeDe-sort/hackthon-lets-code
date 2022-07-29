import AppDataSource from "../../database/dataSource"
import { Donation } from "../../entities/Donation";

type DonationRequest = {
  donation_id: number;
  service_center_id: string;
  donator_id: number;
  student_id: number;
  support_type: string;
}

export class CreateDonationService {
  async execute({ donation_id, service_center_id, donator_id, student_id, support_type }:DonationRequest): Promise<Donation> {
    const repo = AppDataSource.getRepository(Donation);    

    const donation = repo.create({ donation_id, service_center_id, donator_id, student_id, support_type });

    await repo.save(donation);

    return donation;
  }
}