import { Request, Response } from "express";
import { GetServiceCenterAddressService } from "../../services/ServiceCenterAddress/GetServiceCenterAddressService";

export default async function GetServiceCenterAddressController(req: Request, res: Response) {
  const service = new GetServiceCenterAddressService();    
  const periods = await service.execute();

  return res.json(periods);
}
