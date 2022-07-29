import { Request, Response } from "express";
import { CreateServiceCenterService } from "../../services/ServiceCenter/CreateServiceCenterService";

export default async function CreateServiceCenterController(req: Request, res: Response) {
  const service = new CreateServiceCenterService();    
  const result = await service.execute(req.body);

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.json(result);
}
