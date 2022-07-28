import AppDataSource from "../../database/dataSource"
import { Periodo } from "../../entities/Periodo";

type PeriodoRequest = {
  period_id: string;
  name: string;
}

export class UpdatePeriodService {
  async execute({ period_id, name }:PeriodoRequest): Promise<Periodo | Error> {
    const repo = AppDataSource.getRepository(Periodo);    
    const period = await repo.findOneBy({ period_id });

    if (!period) {
      return new Error('Dado não encontrado.')
    }

    period.name = name;

    await repo.save(period);

    return period;
  }
}