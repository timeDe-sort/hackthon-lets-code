import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function DeleteVolunteerController(req: Request, res: Response) {
  const { id } = req.params;
  
  const volunteer = await prismaClient.volunteer.delete({ where: { id: Number(id) }});

  if (volunteer instanceof Error) return res.status(400).json(volunteer.message);

  return res.status(202).json('Doador deletado com sucesso!').end;
}
