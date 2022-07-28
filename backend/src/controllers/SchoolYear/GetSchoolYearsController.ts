import { Request, Response } from "express";
import { GetSchoolYearsService } from "../../services/SchoolYear/GetSchoolYearsService";

export default async function GetSchoolYearsController(req: Request, res: Response) {
  const service = new GetSchoolYearsService();    
  const schoolYears = await service.execute();

  return res.json(schoolYears);
}
