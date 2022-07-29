import AppDataSource from "../../database/dataSource"
import { StudentAddress } from "../../entities/StudentAddress";

type StudentAddressRequest = {
  student_id: number;
  street: string;
  number: number;
  address_complement: string;
  city_id: number;
}

export class CreateStudentAddressService {
  async execute({ student_id, street, number, address_complement, city_id }:StudentAddressRequest): Promise<StudentAddress | Error> {
    const repo = AppDataSource.getRepository(StudentAddress);    

    const studentAddress = repo.create({ student_id, street, number, address_complement, city_id });

    await repo.save(studentAddress);

    return studentAddress;
  }
}