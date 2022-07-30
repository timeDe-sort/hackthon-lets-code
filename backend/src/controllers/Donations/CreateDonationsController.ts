import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function CreateDonationsController(req: Request, res: Response) {
  const { donator_id, student_id, service_center_id, support_type } = req.body;

  const donator = await prismaClient.donation.create({
    data: {
      student_id,
      donator_id,
      service_center_id,
      support_type
    }
  })

  if (donator instanceof Error) return res.status(400).json(donator.message);

  return res.json(donator);
}
