import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function DeleteStudentAddressController(req: Request, res: Response) {
  const { id } = req.params;
  
  const studentAddress = await prismaClient.studentAddress.delete({ where: { id: Number(id) }});

  if (studentAddress instanceof Error) return res.status(400).json(studentAddress.message);

  return res.status(202).json('Doador deletado com sucesso!').end;
}
