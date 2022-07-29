import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function DeleteStudentController(req: Request, res: Response) {
  const { id } = req.params;
  
  const student = await prismaClient.student.delete({ where: { id: Number(id) }});

  if (student instanceof Error) return res.status(400).json(student.message);

  return res.status(202).json('Doador deletado com sucesso!').end;
}
