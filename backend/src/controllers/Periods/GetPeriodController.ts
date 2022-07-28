import { Request, Response } from "express";
import { GetPeriodsService } from "../../services/Periods/GetPeriodsService";

export default async function GetPeriodsController(req: Request, res: Response) {
  const service = new GetPeriodsService();    
  const periods = await service.execute();

  return res.json(periods);
}
