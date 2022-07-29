import { Request, Response } from "express";
import { UpdateVolunteerAddressService } from "../../services/VolunteersAddress/UpdateVolunteerAddressService";

export default async function UpdateVolunteerAddressController(req: Request, res: Response) {
  const service = new UpdateVolunteerAddressService();    
  const { id } = req.params;
  const { volunteer_id, street, number, address_complement, city_id } = req.body;
  
  const result = await service.execute({ address_id: parseInt(id), volunteer_id, street, number, address_complement, city_id });

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.json(result);
}
