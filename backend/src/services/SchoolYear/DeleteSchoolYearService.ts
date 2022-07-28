import AppDataSource from "../../database/dataSource"
import { Serie } from "../../entities/Series";

type SchoolYearRequest = {
  serie_id: string;
}
export class DeleteSchoolYearService {
  async execute({ serie_id }:SchoolYearRequest): Promise<Serie | Error> {
    const repo = AppDataSource.getRepository(Serie);    

    if (!(await repo.findOneBy({ serie_id }))) {
      return new Error('Dado não encontrado.')
    }    

    await repo.delete(serie_id);
  }
}