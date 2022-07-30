import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function UpdateVolunteerController(req: Request, res: Response) {
  const { id } = req.params;
  const { fullname, cpf, birth_date, email, password, university, degree, service_center_id, period, subject, observation } = req.body;
  
  const findVolunteer = await prismaClient.volunteer.findFirst({
    where: { id: Number(id) }
  });

  if (!findVolunteer) return res.status(400).json("Nenhum usuário encontrado.")

  const volunteer = await prismaClient.volunteer.update({ 
    where: {
      id: Number(id)
    },
    data: {
      fullname: fullname ? fullname : findVolunteer.fullname,
      cpf: cpf ? cpf : findVolunteer.cpf,
      birth_date: birth_date ? birth_date : findVolunteer.birth_date,
      email:  email ? email : findVolunteer.email,
      password:  password ? password : findVolunteer.password,
      university:  university ? university : findVolunteer.university,
      degree:  degree ? degree : findVolunteer.degree,
      service_center_id:  service_center_id ? service_center_id : findVolunteer.service_center_id,
      period:  period ? period : findVolunteer.period,
      subject:  subject ? subject : findVolunteer.subject,
      observation:  observation ? observation : findVolunteer.observation,
    }
  }); 

  if (volunteer instanceof Error) return res.status(400).json(volunteer.message);

  return res.json(volunteer);
}
