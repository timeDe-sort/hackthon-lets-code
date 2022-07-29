import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function GetVolunteerAddressController(req: Request, res: Response) {
  const volunteerAddress = await prismaClient.volunteerAddress.findMany();
  return res.json(volunteerAddress);
}
