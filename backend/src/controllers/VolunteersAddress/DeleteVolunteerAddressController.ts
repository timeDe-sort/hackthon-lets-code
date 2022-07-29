import { Request, Response } from "express";
import { DeleteVolunteerAddressService } from "../../services/VolunteersAddress/DeleteVolunteerAddressService";

export default async function DeleteVolunteerController(req: Request, res: Response) {
  const service = new DeleteVolunteerAddressService();    
  const { id } = req.params;
  
  const result = await service.execute({ address_id: parseInt(id) });

  if (result instanceof Error) {
    return res.status(400).json(result.message);
  }

  return res.status(202).end;
}
