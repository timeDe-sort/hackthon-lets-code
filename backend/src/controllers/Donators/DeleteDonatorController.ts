import { Request, Response } from "express";
import { DeleteDonatorService } from '../../services/Donators/DeleteDonatorService'

export default async function DeleteDonatorsController(req: Request, res: Response) {
  const service = new DeleteDonatorService();    
  const { id } = req.params;
  
  const result = await service.execute({ donator_id: Number(id) });

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.status(202).end;
}
