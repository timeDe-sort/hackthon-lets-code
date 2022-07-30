import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function GetVolunteersController(req: Request, res: Response) {
  const volunteer = await prismaClient.volunteer.findMany();
  return res.json(volunteer);
}
