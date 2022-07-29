import { Request, Response } from "express";
import { GetServiceCentersService } from "../../services/ServiceCenter/GetServiceCenterService";

export default async function GetServiceCenterController(req: Request, res: Response) {
  const service = new GetServiceCentersService();    
  const serviceCenter = await service.execute();

  return res.json(serviceCenter);
}
