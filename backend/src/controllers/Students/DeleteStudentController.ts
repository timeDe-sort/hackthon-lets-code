import { Request, Response } from "express";
import { DeletePeriodService } from "../../services/Students/DeleteStudentService";

export default async function DeleteStudentController(req: Request, res: Response) {
  const service = new DeletePeriodService();    
  const { id } = req.params;
  
  const result = await service.execute({ student_id: id });

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.status(202).end;
}
