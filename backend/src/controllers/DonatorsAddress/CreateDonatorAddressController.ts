import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function CreateDonatorAddressController(req: Request, res: Response) {
  const { address_complement, number, street, city_id, donator_id } = req.body;

  const donatorAddress = await prismaClient.donatorAddress.create({
    data: { address_complement, number, street, city_id, donator_id }
  })

  if (donatorAddress instanceof Error) return res.status(400).json(donatorAddress.message);

  return res.json(donatorAddress);
}
