import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function CreateStudentAddressController(req: Request, res: Response) {
  const { address_complement, number, street, city_id, student_id } = req.body;

  const studentAddress = await prismaClient.studentAddress.create({
    data: { address_complement, number, street, city_id, student_id }
  });

  if (studentAddress instanceof Error) return res.status(400).json(studentAddress.message);

  return res.json(studentAddress);
}
