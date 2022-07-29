import { Request, Response } from "express";
import { DeleteDonationService } from '../../services/Donations/DeleteDonationService'

export default async function DeleteDonationsController(req: Request, res: Response) {
  const service = new DeleteDonationService();    
  const { id } = req.params;
  
  const result = await service.execute({ donation_id: id });

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.status(202).end;
}
