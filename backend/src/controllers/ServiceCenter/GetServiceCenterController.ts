import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function GetServiceCenterController(req: Request, res: Response) {
  const serviceCenter = await prismaClient.serviceCenter.findMany();
  return res.json(serviceCenter);
}
