import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function UpdateDonationController(req: Request, res: Response) {
  const { id } = req.params;
  const { student_id, service_center_id, donator_id, support_type } = req.body;  

  const findDonation = await prismaClient.donation.findFirst({
    where: { id: Number(id) }
  });

  if (!findDonation) return res.status(400).json("Nenhum usuário encontrado.")
  
  const donation = await prismaClient.donation.update({ 
    where: {
      id: Number(id)
    },
    data: {
      student_id: student_id ? student_id : findDonation.student_id,
      service_center_id: service_center_id ? service_center_id : findDonation.service_center_id,
      donator_id: donator_id ? donator_id : findDonation.donator_id,
      support_type:  support_type ? support_type : findDonation.support_type,
    }
  }); 

  if (donation instanceof Error) return res.status(400).json(donation.message);

  return res.json(donation);
}