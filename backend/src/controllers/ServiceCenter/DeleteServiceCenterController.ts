import { Request, Response } from "express";
import { DeleteServiceCenterService } from "../../services/ServiceCenter/DeleteServiceCenterService";

export default async function DeleteServiceCenterController(req: Request, res: Response) {
  const service = new DeleteServiceCenterService();    
  const { id } = req.params;
  
  const result = await service.execute({ service_center_id: id });

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.status(202).end;
}
