import AppDataSource from "../../database/dataSource"
import { Donator } from "../../entities/Donator";

type DonatorRequest = {
  donator_id: number;
  donator_name: string;
  document: string;
  email: string;
  password: string;
}

export class UpdateSchoolYearService {
  async execute({ donator_id, donator_name, document, email, password }:DonatorRequest): Promise<Donator | Error> {
    const repo = AppDataSource.getRepository(Donator);    
    const donator = await repo.findOneBy({ donator_id });

    if (!donator) {
      return new Error('Dado não encontrado.')
    }

    donator.donator_name = donator_name ? donator_name : donator.donator_name;
    donator.document = document ? document : donator.document;
    donator.email = email ? email : donator.email;
    donator.password = password ? password : donator.password;

    await repo.save(donator);

    return donator;
  }
}