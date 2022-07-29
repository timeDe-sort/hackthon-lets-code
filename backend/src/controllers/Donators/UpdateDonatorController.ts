import { Request, Response } from "express";
import { UpdateDonatorService } from "../../services/Donators/UpdateDonatorService";

export default async function UpdateDonatorController(req: Request, res: Response) {
  const service = new UpdateDonatorService();    
  const { id } = req.params;
  const { donator_name, document, email, password } = req.body;  
  
  const result = await service.execute({ donator_id: Number(id), donator_name, document, email, password });

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.json(result);
}
