import AppDataSource from "../../database/dataSource"
import { Periodo } from "../../entities/Periodo";

type PeriodoRequest = {
  period_id: string;
}
export class DeletePeriodService {
  async execute({ period_id }:PeriodoRequest): Promise<Periodo | Error> {
    const repo = AppDataSource.getRepository(Periodo);    

    if (!(await repo.findOneBy({ period_id }))) {
      return new Error('Dado não encontrado.')
    }    

    await repo.delete(period_id);
  }
}