import { Request, Response } from "express";
import { UpdateStudentService } from "../../services/Students/UpdateStudentService";

export default async function UpdateStudentController(req: Request, res: Response) {
  const service = new UpdateStudentService();    
  const { id } = req.params;
  const { name, cpf, birth_date, email, password, mother_name, family_code, service_center_id, period, school_year  } = req.body;
  
  const result = await service.execute({ student_id: parseInt(id), name, cpf, birth_date, email, password, mother_name, family_code, service_center_id, period, school_year  });

  if (result instanceof Error) {
    return res.status(400).json(result.message);
  }

  return res.json(result);
}
