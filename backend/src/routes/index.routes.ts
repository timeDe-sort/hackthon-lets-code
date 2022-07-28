import { Router } from "express";
import CreateEstudanteController from "../controllers/Students/CreateEstudanteController";
import { periodRoutes } from "./Periods.Routes";
import { schoolYearRoutes } from "./SchoolYear.Routes";
const routes = Router();

routes.post('/estudantes', CreateEstudanteController);
routes.use('/periods', periodRoutes);
routes.use('/school-year', schoolYearRoutes);

export { routes };
