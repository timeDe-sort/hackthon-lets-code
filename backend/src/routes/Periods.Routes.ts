import CreatePeriodoController from "../controllers/Periods/CreatePeriodoController";
import DeletePeriodController from "../controllers/Periods/DeletePeriodController";
import GetPeriodsController from "../controllers/Periods/GetPeriodController";
import UpdatePeriodController from "../controllers/Periods/UpdatePeriodoController";
import express from 'express';

const periodRoutes = express.Router();

periodRoutes.get('', GetPeriodsController);
periodRoutes.post('', CreatePeriodoController);
periodRoutes.delete('/:id', DeletePeriodController);
periodRoutes.put('/:id', UpdatePeriodController);

export { periodRoutes };
