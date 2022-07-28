import AppDataSource from "../database/dataSource"
import { Periodo } from "../entities/Periodo";

type PeriodoRequest = {
  nome: string;
}

export class CreatePeriodoService {
  async execute({ nome }:PeriodoRequest): Promise<Periodo | Error> {
    const repo = AppDataSource.getRepository(Periodo);    

    if (await repo.findOneBy({ nome })) {
      return new Error('Periodo já cadastrado.')
    }

    const periodo = repo.create({ nome });

    await repo.save(periodo);

    return periodo;
  }
}