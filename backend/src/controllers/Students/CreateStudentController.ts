import { Request, Response } from "express";
import { CreatePeriodService } from "../../services/Students/CreateStudentService";

export default async function CreateStudentsController(req: Request, res: Response) {
  const service = new CreatePeriodService();    
  const result = await service.execute(req.body);

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.json(result);
}