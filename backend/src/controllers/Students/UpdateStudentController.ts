import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function UpdateStudentController(req: Request, res: Response) {
  const { id } = req.params;
  const { fullname, cpf, birth_date, email, password, family_code, mother_name, service_center_id, period } = req.body;
  
  const findStudent = await prismaClient.student.findFirst({
    where: { id: Number(id) }
  });

  if (!findStudent) return res.status(400).json("Nenhum usuário encontrado.")

  const student = await prismaClient.student.update({ 
    where: {
      id: Number(id)
    },
    data: {
      fullname: fullname ? fullname : findStudent.fullname,
      cpf: cpf ? cpf : findStudent.cpf,
      birth_date: birth_date ? birth_date : findStudent.birth_date,
      email:  email ? email : findStudent.email,
      password:  password ? password : findStudent.password,
      family_code:  family_code ? family_code : findStudent.family_code,
      mother_name:  mother_name ? mother_name : findStudent.mother_name,
      service_center_id:  service_center_id ? service_center_id : findStudent.service_center_id,
      period:  period ? period : findStudent.period
    }
  }); 

  if (student instanceof Error) return res.status(400).json(student.message);

  return res.json(student);
}
