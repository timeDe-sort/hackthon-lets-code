import AppDataSource from "../../database/dataSource"
import { Volunteer } from "../../entities/Volunteer";

type VolunteerRequest = {
  volunteer_id: number;
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

export class UpdateVolunteerService {
  async execute({ volunteer_id, volunteer_name, cpf, birth_date, email, password, university, degree, service_center_id, period, subject, observation }:VolunteerRequest): Promise<Volunteer | Error> {
    const repo = AppDataSource.getRepository(Volunteer);    
    const volunteer = await repo.findOneBy({ volunteer_id });

    if (!volunteer) return new Error('Usuário não encontrado.');

    volunteer.volunteer_name = volunteer_name ? volunteer_name : volunteer.volunteer_name ;
    volunteer.cpf = cpf ? cpf : volunteer.cpf ;
    volunteer.birth_date = birth_date ? birth_date : volunteer.birth_date ;
    volunteer.email = email ? email : volunteer.email ;
    volunteer.password = password ? password : volunteer.password ;
    volunteer.university = university ? university : volunteer.university ;
    volunteer.degree = degree ? degree : volunteer.degree ;
    volunteer.service_center_id = service_center_id ? service_center_id : volunteer.service_center_id ;
    volunteer.period = period ? period : volunteer.period ;
    volunteer.subject = subject ? subject : volunteer.subject ;
    volunteer.observation = observation ? observation : volunteer.observation ;

    await repo.save(volunteer);

    return volunteer;
  }
}