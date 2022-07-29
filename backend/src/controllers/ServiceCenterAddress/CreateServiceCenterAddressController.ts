import { Request, Response } from "express";
import { CreateServiceCenterAddressService } from "../../services/ServiceCenterAddress/CreateServiceCenterAddresService";

export default async function CreateServiceCenterAddresController(req: Request, res: Response) {
  const service = new CreateServiceCenterAddressService();    
  const result = await service.execute(req.body);

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.json(result);
}
