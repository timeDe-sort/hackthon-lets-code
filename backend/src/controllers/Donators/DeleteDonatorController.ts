import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function DeleteDonatorsController(req: Request, res: Response) {
  const { id } = req.params;
  
  const donator = await prismaClient.donator.delete({ where: { id: Number(id) }});

  if (donator instanceof Error) return res.status(400).json(donator.message);

  return res.status(202).json('Doador deletado com sucesso!').end;
}
