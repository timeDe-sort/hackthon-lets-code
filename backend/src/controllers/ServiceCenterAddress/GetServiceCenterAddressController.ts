import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function GetServiceCenterAddressController(req: Request, res: Response) {
  const serviceCenterAddress = await prismaClient.serviceCenterAddress.findMany();
  return res.json(serviceCenterAddress);
}
