import AppDataSource from "../../database/dataSource"
import { Donation } from "../../entities/Donation";

type DonationRequest = {
  donation_id: number;
  service_center_id: string;
  donator_id: number;
  student_id: number;
  support_type: string;
}
export class UpdateDonationService {
  async execute({ donation_id, service_center_id, donator_id, student_id, support_type }:DonationRequest): Promise<Donation | Error> {
    const repo = AppDataSource.getRepository(Donation);    
    const donation = await repo.findOneBy({ donation_id });

    if (!donation) {
      return new Error('Doação não encontrada.')
    }

    donation.service_center_id = service_center_id ? service_center_id : donation.service_center_id;
    donation.donator_id = donator_id ? donator_id : donation.donator_id;
    donation.student_id = student_id ? student_id : donation.student_id;
    donation.support_type = support_type ? support_type : donation.support_type;

    await repo.save(donation);

    return donation;
  }
}