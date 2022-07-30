import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function CreateVolunteerAddressController(req: Request, res: Response) {
  const { address_complement, number, street, city_id, volunteer_id } = req.body;

  const volunteerAddress = await prismaClient.volunteerAddress.create({
    data: { address_complement, number, street, city_id, volunteer_id }
  });

  if (volunteerAddress instanceof Error) return res.status(400).json(volunteerAddress.message);

  return res.json(volunteerAddress);
}
