import { Router } from "express";
import CreateEstudanteController from "./controllers/CreateEstudanteController";
import CreatePeriodoController from "./controllers/CreatePeriodoController";
const bodyParser = require('body-parser');
const routes = Router();
const jsonParser = bodyParser.json();

routes.post('/estudantes', jsonParser, CreateEstudanteController);
routes.post('/periodos', jsonParser,CreatePeriodoController);

export { routes };