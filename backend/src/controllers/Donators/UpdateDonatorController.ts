import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function UpdateDonatorController(req: Request, res: Response) {
  const { id } = req.params;
  const { name, document, email, password } = req.body;  

  const findDonator = await prismaClient.donator.findFirst({
    where: { id: Number(id) }
  });

  if (!findDonator) return res.status(400).json("Nenhum usuário encontrado.")
  
  const donator = await prismaClient.donator.update({ 
    where: {
      id: Number(id)
    },
    data: {
      name: name ? name : findDonator.name,
      document: document ? document : findDonator.document,
      email: email ? email : findDonator.email,
      password:  password ? password : findDonator.password,
    }
  }); 

  if (donator instanceof Error) return res.status(400).json(donator.message);

  return res.json(donator);
}
