import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function DeleteVolunteerAddressController(req: Request, res: Response) {
  const { id } = req.params;
  
  const volunteerAddress = await prismaClient.volunteerAddress.delete({ where: { id: Number(id) }});

  if (volunteerAddress instanceof Error) return res.status(400).json(volunteerAddress.message);

  return res.status(202).json('Doador deletado com sucesso!').end;
}
