import AppDataSource from "../database/dataSource"
import { Period } from "../entities/Period";

type PeriodRequest = {
  name: string;
}

export class CreatePeriodService {
  async execute({ name }:PeriodRequest): Promise<Period | Error> {
    const repo = AppDataSource.getRepository(Period);    

    if (await repo.findOneBy({ name })) {
      return new Error('Período já cadastrado.')
    }

    const period = repo.create({ name });

    await repo.save(period);

    return period;
  }
}