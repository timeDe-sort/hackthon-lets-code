import { Request, Response } from "express";
import { GetDonatorsService } from "../../services/Donators/GetDonatorsService";

export default async function GetDonatorController(req: Request, res: Response) {
  const service = new GetDonatorsService();    
  const donators = await service.execute();
  return res.json(donators);
}
