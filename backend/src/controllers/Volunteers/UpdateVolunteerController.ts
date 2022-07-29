import { Request, Response } from "express";
import { UpdatePeriodService } from "../../services/Students/UpdateStudentService";

export default async function UpdatePeriodController(req: Request, res: Response) {
  const service = new UpdatePeriodService();    
  const { id } = req.params;
  const { name } = req.body;
  
  const result = await service.execute({ period_id: id, name });

  if (result instanceof Error) {
    return res.status(400).json(result.message);
  }

  return res.json(result);
}
