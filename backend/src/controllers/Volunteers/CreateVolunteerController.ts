import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function CreateVolunteerController(req: Request, res: Response) {
  const { fullname, cpf, birth_date, email, password, university, degree, service_center_id, period, subject, observation } = req.body;

  const volunteer = await prismaClient.volunteer.create({
    data: { fullname, cpf, birth_date, email, password, university, degree, service_center_id, period, subject, observation }
  });

  if (volunteer instanceof Error) return res.status(400).json(volunteer.message);

  return res.json(volunteer);
}
