import { Request, Response } from "express";
import { GetVolunteerService } from "../../services/Volunteers/GetVolunteersService";

export default async function GetVolunteersController(req: Request, res: Response) {
  const service = new GetVolunteerService();    
  const periods = await service.execute();

  return res.json(periods);
}
