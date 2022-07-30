import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function CreateServiceCenterController(req: Request, res: Response) {
  const { name, cnpj, email, password } = req.body;

  const serviceCenter = await prismaClient.serviceCenter.create({
    data: { name, cnpj, email, password }
  });

  if (serviceCenter instanceof Error) return res.status(400).json(serviceCenter.message);

  return res.json(serviceCenter);
}
