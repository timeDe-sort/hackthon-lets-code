import AppDataSource from "../../database/dataSource"
import { Serie } from "../../entities/Series";

type SerieRequest = {
  serie_id: string;
  serie_nome: string;
}

export class UpdateSchoolYearService {
  async execute({ serie_id, serie_nome }:SerieRequest): Promise<Serie | Error> {
    const repo = AppDataSource.getRepository(Serie);    
    const schollYear = await repo.findOneBy({ serie_id });

    if (!schollYear) {
      return new Error('Dado não encontrado.')
    }

    schollYear.serie_nome = serie_nome;

    await repo.save(schollYear);

    return schollYear;
  }
}