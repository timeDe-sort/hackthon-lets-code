import AppDataSource from "../../database/dataSource"
import { Student } from "../../entities/Student";

type StudentRequest = {
  name: string;
  cpf: string;
  birth_date: Date;
  email: string;
  password: string;
  mother_name: string;
  family_code: string;
  service_center_id: number;
  period: string;
  school_year: string;
}

export class CreatePeriodService {
  async execute({ name, cpf, birth_date, email, password, mother_name, family_code, service_center_id, period, school_year }:StudentRequest): Promise<Student | Error> {
    const repo = AppDataSource.getRepository(Student);
    const findByCpf = await repo.findOneBy({ cpf });
    const findByEmail = await repo.findOneBy({ email });

    if (findByCpf) return new Error('Cpf já cadastrado.')
    if (findByEmail) return new Error('Email já cadastrado.');

    const student = repo.create({ name, cpf, birth_date, email, password, mother_name, family_code, service_center_id, period, school_year });

    await repo.save(student);

    return student;
  }
}