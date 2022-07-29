import { Request, Response } from "express";
import { DeleteSchoolYearService } from "../../services/StudentsAddress/DeleteVolunteerService";

export default async function DeleteSchoolYearController(req: Request, res: Response) {
  const service = new DeleteSchoolYearService();    
  const { id } = req.params;
  
  const result = await service.execute({ serie_id: id });

  if (result instanceof Error) {
    return res.status(400).json(result.message);
  }

  return res.status(202).end;
}
