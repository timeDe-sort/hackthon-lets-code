import AppDataSource from "../../database/dataSource"
import { Periodo } from "../../entities/Periodo";

type PeriodoRequest = {
  nome: string;
}

export class GetPeriodsService {
  async execute() {
    const repo = AppDataSource.getRepository(Periodo);    

    const periodo = repo.find();

    return periodo;
  }
}