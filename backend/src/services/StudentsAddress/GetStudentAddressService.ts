import AppDataSource from "../../database/dataSource"
import { StudentAddress } from "../../entities/StudentAddress";

export class GetStudentsAddressService {
  async execute() {
    const repo = AppDataSource.getRepository(StudentAddress);    
    const studentAddress = await repo.find();
    return studentAddress;
  }
}