import { Request, Response } from "express";
import { DeleteServiceCenterAddressService } from "../../services/ServiceCenterAddress/DeleteServiceCenterAddresService";

export default async function DeleteServiceCenterAddressController(req: Request, res: Response) {
  const service = new DeleteServiceCenterAddressService();    
  const { id } = req.params;
  
  const result = await service.execute({ address_id: parseInt(id) });

  if (result instanceof Error) res.status(400).json(result.message);

  return res.status(202).end;
}
