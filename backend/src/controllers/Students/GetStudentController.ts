import { Request, Response } from "express";
import { GetStudentsService } from "../../services/Students/GetStudentsService";

export default async function GetStudentsController(req: Request, res: Response) {
  const service = new GetStudentsService();    
  const periods = await service.execute();

  return res.json(periods);
}
