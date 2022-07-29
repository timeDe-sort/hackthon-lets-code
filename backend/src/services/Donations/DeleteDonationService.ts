import AppDataSource from "../../database/dataSource"
import { Donation } from "../../entities/Donation";

type DonationRequest = {
  donation_id: string;
}
export class DeleteDonationService {
  async execute({ donation_id }:DonationRequest): Promise<Donation | Error> {
    const repo = AppDataSource.getRepository(Donation);    

    if (!(await repo.findOneBy({ donation_id }))) {
      return new Error('Doação não encontrada não encontrado.')
    }    

    await repo.delete(donation_id);

    return repo;
  }
}