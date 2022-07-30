import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function GetDonatorController(req: Request, res: Response) {
  const donators = await prismaClient.donator.findMany();
  return res.json(donators);
}
