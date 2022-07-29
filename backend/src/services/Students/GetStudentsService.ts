import AppDataSource from "../../database/dataSource"
import { Student } from "../../entities/Student";

type StudentRequest = {
  nome: string;
}

export class GetPeriodsService {
  async execute() {
    const repo = AppDataSource.getRepository(Student);    
    const student = repo.find();
    return student;
  }
}