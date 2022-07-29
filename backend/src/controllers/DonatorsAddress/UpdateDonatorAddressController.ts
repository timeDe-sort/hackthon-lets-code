import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function UpdateDonatorAddressController(req: Request, res: Response) {
  const { id } = req.params;
  const { donator_id, street, number, address_complement, city_id } = req.body;  

  const findDonatorAddress = await prismaClient.donatorAddress.findFirst({
    where: { id: Number(id) }
  });

  if (!findDonatorAddress) return res.status(400).json("Nenhum usuário encontrado.")
  
  const donatorAddress = await prismaClient.donatorAddress.update({ 
    where: {
      id: Number(id)
    },
    data: {
      donator_id: donator_id ? donator_id : findDonatorAddress.donator_id,
      street: street ? street : findDonatorAddress.street,
      number: number ? number : findDonatorAddress.number,
      address_complement:  address_complement ? address_complement : findDonatorAddress.address_complement,
      city_id:  city_id ? city_id : findDonatorAddress.city_id,
    }
  }); 

  if (donatorAddress instanceof Error) return res.status(400).json(donatorAddress.message);

  return res.json(donatorAddress);
}
