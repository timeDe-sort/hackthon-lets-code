import AppDataSource from "../../database/dataSource"
import { Volunteer } from "../../entities/Volunteer";

export class GetVolunteerService {
  async execute() {
    const repo = AppDataSource.getRepository(Volunteer);    
    const volunteer = repo.find();
    return volunteer;
  }
}