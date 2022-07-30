import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function DeleteServiceCenterAddressController(req: Request, res: Response) {
  const { id } = req.params;
  
  const serviceCenterAddress = await prismaClient.serviceCenterAddress.delete({ where: { id: Number(id) }});

  if (serviceCenterAddress instanceof Error) return res.status(400).json(serviceCenterAddress.message);

  return res.status(202).json('Endereço deletado com sucesso!').end;
}
