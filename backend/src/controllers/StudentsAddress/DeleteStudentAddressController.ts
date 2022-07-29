import { Request, Response } from "express";
import { DeleteStudentAddressService } from "../../services/StudentsAddress/DeleteStudentAddressService";

export default async function DeleteStudentAddressController(req: Request, res: Response) {
  const service = new DeleteStudentAddressService();    
  const { id } = req.params;
  
  const result = await service.execute({ address_id: parseInt(id) });

  if (result instanceof Error) {
    return res.status(400).json(result.message);
  }

  return res.status(202).end;
}
