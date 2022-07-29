import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function UpdateStudentAddressController(req: Request, res: Response) {
  const { id } = req.params;
  const { student_id, street, number, address_complement, city_id } = req.body;  

  const findStudentAddress = await prismaClient.studentAddress.findFirst({
    where: { id: Number(id) }
  });

  if (!findStudentAddress) return res.status(400).json("Nenhum usuário encontrado.")

  const serviceCenterAddress = await prismaClient.studentAddress.update({ 
    where: {
      id: Number(id)
    },
    data: {
      student_id: student_id ? student_id : findStudentAddress.student_id,
      street: street ? street : findStudentAddress.street,
      number: number ? number : findStudentAddress.number,
      address_complement:  address_complement ? address_complement : findStudentAddress.address_complement,
      city_id:  city_id ? city_id : findStudentAddress.city_id,
    }
  }); 

  if (serviceCenterAddress instanceof Error) return res.status(400).json(serviceCenterAddress.message);

  return res.json(serviceCenterAddress);
}
