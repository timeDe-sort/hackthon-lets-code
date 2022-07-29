import AppDataSource from "../../database/dataSource"
import { StudentAddress } from "../../entities/StudentAddress";

type StudentAddressRequest = {
  address_id: number;
}

export class DeleteStudentAddressService {
  async execute({ address_id }:StudentAddressRequest): Promise<StudentAddress | Error> {
    const repo = AppDataSource.getRepository(StudentAddress);    

    if (!(await repo.findOneBy({ address_id }))) {
      return new Error('Dado não encontrado.')
    }    

    await repo.delete(address_id);
    return repo;
  }
}