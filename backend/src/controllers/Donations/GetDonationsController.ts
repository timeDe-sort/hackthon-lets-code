import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function GetDonationsController(req: Request, res: Response) {
  const donations = await prismaClient.donation.findMany();
  return res.json(donations);
}
