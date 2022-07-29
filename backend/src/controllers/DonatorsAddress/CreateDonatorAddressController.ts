import { Request, Response } from "express";
import { CreateDonatorAddressService } from '../../services/DonatorsAddress/CreateDonatorAddressService'

export default async function CreateDonatorAddressController(req: Request, res: Response) {
  const service = new CreateDonatorAddressService();    
  const result = await service.execute(req.body);

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.json(result);
}
