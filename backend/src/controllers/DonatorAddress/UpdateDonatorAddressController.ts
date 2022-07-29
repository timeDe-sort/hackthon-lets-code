import { Request, Response } from "express";
import { UpdateSchoolYearService } from "../../services/StudentsAddress/UpdateVolunteerService";

export default async function UpdateSchoolYearController(req: Request, res: Response) {
  const service = new UpdateSchoolYearService();    
  const { id } = req.params;
  const { serie_nome } = req.body;
  console.log(id);
  
  
  const result = await service.execute({ serie_id: id, serie_nome });

  if (result instanceof Error) {
    return res.status(400).json(result.message);
  }

  return res.json(result);
}
