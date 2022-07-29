import { Request, Response } from "express";
import { UpdateDonationService } from "../../services/Donations/UpdateDonationService";

export default async function UpdateDonationController(req: Request, res: Response) {
  const service = new UpdateDonationService();    
  const { id } = req.params;
  const { service_center_id, donator_id, student_id, support_type } = req.body;  
  
  const result = await service.execute({ donation_id: Number(id), service_center_id, donator_id, student_id, support_type });

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.json(result);
}
