import { Request, Response } from "express";
import { DeleteDonatorAddressService } from '../../services/DonatorsAddress/DeleteDonatorAddressService'

export default async function DeleteDonatorsController(req: Request, res: Response) {
  const service = new DeleteDonatorAddressService();    
  const { id } = req.params;
  
  const result = await service.execute({ address_id: Number(id) });

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.status(202).end;
}
