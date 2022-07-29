import { Request, Response } from "express";
import { GetVolunteersAddressService } from "../../services/VolunteersAddress/GetVolunteersAddressService";

export default async function GetVolunteerAddressController(req: Request, res: Response) {
  const service = new GetVolunteersAddressService();    
  const periods = await service.execute();

  return res.json(periods);
}
