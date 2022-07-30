import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function UpdateServiceCenterController(req: Request, res: Response) {
  const { id } = req.params;
  const { name, cnpj, email, password } = req.body;  

  const findServiceCenterAddress = await prismaClient.serviceCenter.findFirst({
    where: { id: Number(id) }
  });

  if (!findServiceCenterAddress) return res.status(400).json("Nenhum usuário encontrado.")
  
  const serviceCenter = await prismaClient.serviceCenter.update({ 
    where: {
      id: Number(id)
    },
    data: {
      name: name ? name : findServiceCenterAddress.name,
      cnpj: cnpj ? cnpj : findServiceCenterAddress.cnpj,
      email: email ? email : findServiceCenterAddress.email,
      password:  password ? password : findServiceCenterAddress.password
    }
  }); 

  if (serviceCenter instanceof Error) return res.status(400).json(serviceCenter.message);

  return res.json(serviceCenter);
}
