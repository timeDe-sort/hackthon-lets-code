import { Request, Response } from "express";
import { CreateDonationService } from '../../services/Donations/CreateDonationService'

export default async function CreateDonationsController(req: Request, res: Response) {
  const service = new CreateDonationService();    
  const result = await service.execute(req.body);

  if (result instanceof Error) {
    return res.status(400).json(result.message);
  }

  return res.json(result);
}
