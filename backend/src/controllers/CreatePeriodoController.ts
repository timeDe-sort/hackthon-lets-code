import { CreatePeriodoService } from "../services/CreatePeriodoService";

export default async function CreatePeriodoController(req, res) {
  const service = new CreatePeriodoService();    
  const result = await service.execute(req.body);

  if (result instanceof Error) {
    return res.status(400).json(result.message);
  }

  return res.json(result);
}
