import { Request, Response } from "express";
import { CreatePeriodService } from "../../services/Periods/CreatePeriodService";

export default async function CreatePeriodoController(req: Request, res: Response) {
  const service = new CreatePeriodService();    
  const result = await service.execute(req.body);

  if (result instanceof Error) {
    return res.status(400).json(result.message);
  }

  return res.json(result);
}
