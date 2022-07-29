import AppDataSource from "../../database/dataSource"
import { Volunteer } from "../../entities/Volunteer";

type VolunteerRequest = {
  volunteer_id: string;
}

export class DeleteVolunteerService {
  async execute({ volunteer_id }:VolunteerRequest): Promise<Volunteer | Error> {
    const repo = AppDataSource.getRepository(Volunteer);    

    if (!(await repo.findOneBy({ volunteer_id }))) return new Error('Usuário não encontrado não encontrado.');

    await repo.delete(volunteer_id);
  }
}