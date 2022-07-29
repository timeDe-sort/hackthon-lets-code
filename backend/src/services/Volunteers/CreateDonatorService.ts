import AppDataSource from "../../database/dataSource"
import { Volunteer } from "../../entities/Volunteer";

type VolunteerRequest = {
  volunteer_name: string;
  cpf: string;
  birth_date: Date;
  email: string;
  password: string;
  university: string;
  degree: string;
  service_center_id: number;
  period: string;
  subject: string;
  observation: string;
}

export class CreateSchoolYearService {
  async execute({ volunteer_name, cpf, birth_date, email, password, university, degree, service_center_id, period, subject, observation }:VolunteerRequest): Promise<Volunteer | Error> {
    const repo = AppDataSource.getRepository(Volunteer);
    const findByCpf = await repo.findOneBy({ cpf }); 
    const findByEmail = await repo.findOneBy({ email }); 

    if (findByCpf) return new Error('Cpf já cadastrado.');
    if (findByEmail) return new Error('Email já cadastrado.');

    const volunteer = repo.create({ volunteer_name, cpf, birth_date, email, password, university, degree, service_center_id, period, subject, observation });

    await repo.save(volunteer);

    return volunteer;
  }
}