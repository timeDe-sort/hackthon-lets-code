import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function UpdateServiceCenterAddressController(req: Request, res: Response) {
  const { id } = req.params;
  const { service_center_id, street, number, address_complement, city_id } = req.body;  

  const findServiceCenterAddress = await prismaClient.serviceCenterAddress.findFirst({
    where: { id: Number(id) }
  });

  if (!findServiceCenterAddress) return res.status(400).json("Nenhum usuário encontrado.")
  
  const serviceCenterAddress = await prismaClient.serviceCenterAddress.update({ 
    where: {
      id: Number(id)
    },
    data: {
      service_center_id: service_center_id ? service_center_id : findServiceCenterAddress.service_center_id,
      street: street ? street : findServiceCenterAddress.street,
      number: number ? number : findServiceCenterAddress.number,
      address_complement:  address_complement ? address_complement : findServiceCenterAddress.address_complement,
      city_id:  city_id ? city_id : findServiceCenterAddress.city_id,
    }
  }); 

  if (serviceCenterAddress instanceof Error) return res.status(400).json(serviceCenterAddress.message);

  return res.json(serviceCenterAddress);
}
