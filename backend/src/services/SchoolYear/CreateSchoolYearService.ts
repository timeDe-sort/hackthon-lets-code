import AppDataSource from "../../database/dataSource"
import { Serie } from "../../entities/Series";

type SchoolYearRequest = {
  serie_nome: string;
}

export class CreateSchoolYearService {
  async execute({ serie_nome }:SchoolYearRequest): Promise<Serie | Error> {
    const repo = AppDataSource.getRepository(Serie);    

    if (await repo.findOneBy({ serie_nome })) {
      return new Error('Periodo já cadastrado.')
    }

    const periodo = repo.create({ serie_nome });

    await repo.save(periodo);

    return periodo;
  }
}