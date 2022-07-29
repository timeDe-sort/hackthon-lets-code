import { Request, Response } from "express";
import { UpdateDonatorAddressService } from "../../services/DonatorsAddress/UpdateDonatorAddressService";

export default async function UpdateDonatorAddressController(req: Request, res: Response) {
  const service = new UpdateDonatorAddressService();    
  const { id } = req.params;
  const { donator_id, street, number, address_complement, city_id } = req.body;  
  
  const result = await service.execute({ address_id: Number(id), donator_id, street, number, address_complement, city_id });

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.json(result);
}
