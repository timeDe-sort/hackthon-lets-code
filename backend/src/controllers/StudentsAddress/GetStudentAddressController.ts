import { Request, Response } from "express";
import { GetStudentsAddressService } from "../../services/StudentsAddress/GetStudentAddressService";

export default async function GetStudentAddressController(req: Request, res: Response) {
  const service = new GetStudentsAddressService();    
  const periods = await service.execute();

  return res.json(periods);
}
