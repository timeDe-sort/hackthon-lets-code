import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function GetDonatorAddressController(req: Request, res: Response) {
  const donatorsAddress = await prismaClient.donatorAddress.findMany();
  return res.json(donatorsAddress);
}
