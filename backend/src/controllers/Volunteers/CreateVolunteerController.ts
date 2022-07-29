import { Request, Response } from "express";
import { CreateVolunteerService } from "../../services/Volunteers/CreateVolunteerService";

export default async function CreateVolunteerController(req: Request, res: Response) {
  const service = new CreateVolunteerService();    
  const result = await service.execute(req.body);

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.json(result);
}
