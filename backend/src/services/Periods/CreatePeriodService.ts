import AppDataSource from "../../database/dataSource"
import { Periodo } from "../../entities/Periodo";

type PeriodoRequest = {
  name: string;
}

export class CreatePeriodService {
  async execute({ name }:PeriodoRequest): Promise<Periodo | Error> {
    const repo = AppDataSource.getRepository(Periodo);    

    if (await repo.findOneBy({ name })) {
      return new Error('Periodo já cadastrado.')
    }

    const periodo = repo.create({ name });

    await repo.save(periodo);

    return periodo;
  }
}