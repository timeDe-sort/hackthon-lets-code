import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function GetStudentAddressController(req: Request, res: Response) {
  const studentAddress = await prismaClient.studentAddress.findMany();
  return res.json(studentAddress);
}
