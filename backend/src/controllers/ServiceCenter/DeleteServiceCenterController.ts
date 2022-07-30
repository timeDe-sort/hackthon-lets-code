import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function DeleteServiceCenterController(req: Request, res: Response) {
  const { id } = req.params;
  
  const serviceCenter = await prismaClient.serviceCenter.delete({ where: { id: Number(id) }});

  if (serviceCenter instanceof Error) return res.status(400).json(serviceCenter.message);

  return res.status(202).json('Centro de Atendimento deletado com sucesso!').end;
}
