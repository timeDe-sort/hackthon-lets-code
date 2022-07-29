import { Request, Response } from "express";
import { UpdateServiceCenterService } from "../../services/ServiceCenter/UpdateServiceCenterService";

export default async function UpdateServiceCenterController(req: Request, res: Response) {
  const service = new UpdateServiceCenterService();    
  const { id } = req.params;
  const { service_center_name, cnpj, email, password } = req.body;
  
  const result = await service.execute({ service_center_id: Number(id), service_center_name, cnpj, email, password });

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.json(result);
}
