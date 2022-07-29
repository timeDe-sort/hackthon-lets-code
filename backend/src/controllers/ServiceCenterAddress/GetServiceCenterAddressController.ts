import { Request, Response } from "express";
import { GetPeriodsService } from "../../services/Students/GetStudentsService";

export default async function GetPeriodsController(req: Request, res: Response) {
  const service = new GetPeriodsService();    
  const periods = await service.execute();

  return res.json(periods);
}
