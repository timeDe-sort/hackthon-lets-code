import { Request, Response } from "express";
import { CreateStudentAddressService } from "../../services/StudentsAddress/CreateStudentAddressService";

export default async function CreateStudentAddressController(req: Request, res: Response) {
  const service = new CreateStudentAddressService();    
  const result = await service.execute(req.body);

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.json(result);
}
