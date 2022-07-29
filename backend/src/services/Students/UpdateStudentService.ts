import AppDataSource from "../../database/dataSource"
import { Student } from "../../entities/Student";

type StudentRequest = {
  student_id: number;
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

export class UpdateStudentService {
  async execute({ student_id, name, cpf, birth_date, email, password, mother_name, family_code, service_center_id, period, school_year }:StudentRequest): Promise<Student | Error> {
    const repo = AppDataSource.getRepository(Student);    
    const student = await repo.findOneBy({ student_id });

    if (!student) return new Error('Dado não encontrado.');

    student.name = name ? name : student.name;
    student.cpf = cpf ? cpf : student.cpf;
    student.birth_date = birth_date ? birth_date : student.birth_date;
    student.email = email ? email : student.email;
    student.password = password ? password : student.password;
    student.mother_name = mother_name ? mother_name : student.mother_name;
    student.family_code = family_code ? family_code : student.family_code;
    student.period = period ? period : student.period;
    student.service_center_id = service_center_id ? service_center_id : student.service_center_id;
    student.school_year = school_year ? school_year : student.school_year;

    await repo.save(student);

    return student;
  }
}