import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function CreateDonatorController(req: Request, res: Response) {
  const { name, document, email, password } = req.body;

  const donator = await prismaClient.donator.create({
    data: { name, document, email, password }
  })

  if (donator instanceof Error) return res.status(400).json(donator.message);

  return res.json(donator);
}
