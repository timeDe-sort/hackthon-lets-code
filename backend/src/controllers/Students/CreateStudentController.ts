import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function CreateStudentsController(req: Request, res: Response) {
  const { fullname, cpf, birth_date, email, password, family_code, mother_name, service_center_id, period } = req.body;

  const student = await prismaClient.student.create({
    data: { fullname, cpf, birth_date, email, password, family_code, mother_name, service_center_id, period }
  });

  if (student instanceof Error) return res.status(400).json(student.message);

  return res.json(student);
}
