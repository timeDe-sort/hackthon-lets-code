import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function UpdateVolunteerAddressController(req: Request, res: Response) {
  const { id } = req.params;
  const { volunteer_id, street, number, address_complement, city_id } = req.body;  

  const findVolunteerAddress = await prismaClient.volunteerAddress.findFirst({
    where: { id: Number(id) }
  });

  if (!findVolunteerAddress) return res.status(400).json("Nenhum usuário encontrado.")

  const volunteerAddress = await prismaClient.volunteerAddress.update({ 
    where: {
      id: Number(id)
    },
    data: {
      volunteer_id: volunteer_id ? volunteer_id : findVolunteerAddress.volunteer_id,
      street: street ? street : findVolunteerAddress.street,
      number: number ? number : findVolunteerAddress.number,
      address_complement:  address_complement ? address_complement : findVolunteerAddress.address_complement,
      city_id:  city_id ? city_id : findVolunteerAddress.city_id,
    }
  }); 

  if (volunteerAddress instanceof Error) return res.status(400).json(volunteerAddress.message);

  return res.json(volunteerAddress);
}
