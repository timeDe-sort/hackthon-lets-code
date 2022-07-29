import { Request, Response } from "express";
import { GetDonationService } from "../../services/Donations/GetDonationService";

export default async function GetDonationsController(req: Request, res: Response) {
  const service = new GetDonationService();    
  const donations = await service.execute();

  return res.json(donations);
}
