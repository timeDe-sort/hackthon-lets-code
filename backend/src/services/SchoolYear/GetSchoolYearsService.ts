import AppDataSource from "../../database/dataSource"
import { Serie } from "../../entities/Series";

export class GetSchoolYearsService {
  async execute() {
    const repo = AppDataSource.getRepository(Serie);    

    const schoolYears = repo.find();

    return schoolYears;
  }
}