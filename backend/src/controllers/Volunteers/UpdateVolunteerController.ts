import { Request, Response } from "express";
import { UpdateVolunteerService } from "../../services/Volunteers/UpdateVolunteerService";

export default async function UpdateVolunteerController(req: Request, res: Response) {
  const service = new UpdateVolunteerService();    
  const { id } = req.params;
  const { volunteer_name, cpf, birth_date, email, password, university, degree, service_center_id, period, subject, observation } = req.body;
  
  const result = await service.execute({ volunteer_id: parseInt(id), volunteer_name, cpf, birth_date, email, password, university, degree, service_center_id, period, subject, observation });

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.json(result);
}
