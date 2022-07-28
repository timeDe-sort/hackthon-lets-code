import { Request, Response } from "express";
import { CreateSchoolYearService } from "../../services/SchoolYear/CreateSchoolYearService";

export default async function CreateSchoolYearController(req: Request, res: Response) {
  const service = new CreateSchoolYearService();    
  const result = await service.execute(req.body);

  if (result instanceof Error) {
    return res.status(400).json(result.message);
  }

  return res.json(result);
}
