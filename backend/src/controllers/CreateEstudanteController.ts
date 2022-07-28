import { CreateEstudanteService } from "../services/CreateEstudanteService";

export default async function CreateEstudanteController(req, res) {
  const service = new CreateEstudanteService();
  const result = await service.execute(req.body);

  if (result instanceof Error) {
    return res.status(400).json(result.message);
  }
  return res.json(result);
}
