import { Request, Response } from "express";
import { UpdateServiceCenterAddresService } from "../../services/ServiceCenterAddress/UpdateServiceCenterAddresService";

export default async function UpdateServiceCenterAddressController(req: Request, res: Response) {
  const service = new UpdateServiceCenterAddresService();    
  const { id } = req.params;
  const { service_center_id, street, number, address_complement, city_id } = req.body;
  
  const result = await service.execute({ address_id: parseInt(id), service_center_id, street, number, address_complement, city_id });

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.json(result);
}
