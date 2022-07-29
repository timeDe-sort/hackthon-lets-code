import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function DeleteDonationsController(req: Request, res: Response) {
  const { id } = req.params;
  
  const donation = await prismaClient.donation.delete({ where: { id: Number(id) }});

  if (donation instanceof Error) return res.status(400).json(donation.message);

  return res.status(202).json('Doador deletado com sucesso!').end;
}

