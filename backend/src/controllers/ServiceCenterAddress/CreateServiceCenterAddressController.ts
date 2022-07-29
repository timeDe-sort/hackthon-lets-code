import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function CreateServiceCenterAddressController(req: Request, res: Response) {
  const { address_complement, number, street, city_id, service_center_id } = req.body;

  const serviceCenterAddress = await prismaClient.serviceCenterAddress.create({
    data: { address_complement, number, street, city_id, service_center_id }
  });

  if (serviceCenterAddress instanceof Error) return res.status(400).json(serviceCenterAddress.message);

  return res.json(serviceCenterAddress);
}
