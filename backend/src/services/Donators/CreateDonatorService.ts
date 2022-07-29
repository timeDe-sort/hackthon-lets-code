import AppDataSource from "../../database/dataSource"
import { Donator } from "../../entities/Donator";

type DonatorRequest = {
  donator_name: string;
  document: string;
  email: string;
  password: string;
}

export class CreateDonatorService {
  async execute({ donator_name, document, email, password }:DonatorRequest): Promise<Donator | Error> {
    const repo = AppDataSource.getRepository(Donator);
    const findByEmail = await repo.findOneBy({ email });
    const findByDocument = await repo.findOneBy({ document });

    if (findByEmail) return new Error('Email já cadastrado.')
    else if (findByDocument) return new Error('Documento já cadastrado');

    const donator = repo.create({ donator_name, document, email, password });

    await repo.save(donator);

    return donator;
  }
}