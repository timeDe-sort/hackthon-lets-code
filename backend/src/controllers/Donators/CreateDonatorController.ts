import { Request, Response } from "express";
import { CreateDonatorService } from '../../services/Donators/CreateDonatorService'

export default async function CreateDonatorController(req: Request, res: Response) {
  const service = new CreateDonatorService();    
  const result = await service.execute(req.body);

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.json(result);
}
