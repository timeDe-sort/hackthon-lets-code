import { Request, Response } from "express";
import { GetDonatorsAddressService } from "../../services/DonatorsAddress/GetDonatorsAddressService";

export default async function GetDonatorAddressController(req: Request, res: Response) {
  const service = new GetDonatorsAddressService();    
  const donatorsAddress = await service.execute();
  return res.json(donatorsAddress);
}
