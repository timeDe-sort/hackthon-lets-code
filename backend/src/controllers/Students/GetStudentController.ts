import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function GetStudentsController(req: Request, res: Response) {
  const student = await prismaClient.student.findMany();
  return res.json(student);
}
