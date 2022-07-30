import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function DeleteDonatorsAddressController(req: Request, res: Response) {
  const { id } = req.params;
  
  const donatorAddress = await prismaClient.donatorAddress.delete({ where: { id: Number(id) }});

  if (donatorAddress instanceof Error) return res.status(400).json(donatorAddress.message);

  return res.status(202).json('Endereço deletado com sucesso!').end;
}
