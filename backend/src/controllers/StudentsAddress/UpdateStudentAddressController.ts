import { Request, Response } from "express";
import { UpdateStudentAddressService } from "../../services/StudentsAddress/UpdateStudentAddressService";

export default async function UpdatePeriodController(req: Request, res: Response) {
  const service = new UpdateStudentAddressService();    
  const { id } = req.params;
  const { student_id, street, number, address_complement, city_id } = req.body;
  
  const result = await service.execute({ address_id: parseInt(id), student_id, street, number, address_complement, city_id });

  if (result instanceof Error) {
    return res.status(400).json(result.message);
  }

  return res.json(result);
}
