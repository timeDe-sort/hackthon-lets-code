import { Request, Response } from "express";
import { DeleteVolunteerService } from "../../services/Volunteers/DeleteVolunteerService";

export default async function DeleteVolunteerController(req: Request, res: Response) {
  const service = new DeleteVolunteerService();    
  const { id } = req.params;
  
  const result = await service.execute({ volunteer_id: id });

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.status(202).end;
}
