import AppDataSource from "../../database/dataSource"
import { StudentAddress } from "../../entities/StudentAddress";

type StudentAddressRequest = {
  address_id: number;
  student_id: number;
  street: string;
  number: number;
  address_complement: string;
  city_id: number;
}

export class UpdateSchoolYearService {
  async execute({ address_id, student_id, street, number, address_complement, city_id }:StudentAddressRequest): Promise<StudentAddress | Error> {
    const repo = AppDataSource.getRepository(StudentAddress);    
    const studentAddress = await repo.findOneBy({ address_id });

    if (!studentAddress) {
      return new Error('Dado não encontrado.')
    }

    studentAddress.student_id = student_id ? student_id :  studentAddress.student_id;
    studentAddress.street = street ? street :  studentAddress.street;
    studentAddress.number = number ? number :  studentAddress.number;
    studentAddress.address_complement = address_complement ? address_complement :  studentAddress.address_complement;
    studentAddress.city_id = city_id ? city_id :  studentAddress.city_id;

    await repo.save(studentAddress);

    return studentAddress;
  }
}