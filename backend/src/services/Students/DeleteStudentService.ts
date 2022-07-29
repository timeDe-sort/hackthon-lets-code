import AppDataSource from "../../database/dataSource"
import { Student } from "../../entities/Student";

type StudentRequest = {
  student_id: string;
}

export class DeletePeriodService {
  async execute({ student_id }:StudentRequest): Promise<Student | Error> {
    const repo = AppDataSource.getRepository(Student);    

    if (!(await repo.findOneBy({ student_id }))) return new Error('Estudante não encontrado.')

    await repo.delete(student_id);

    return 'Estudante deleteado com sucesso.';
  }
}