import CreatePeriodoController from "../controllers/Students/CreateStudentController";
import DeletePeriodController from "../controllers/Students/DeleteStudentController";
import GetPeriodsController from "../controllers/Students/GetStudentController";
import UpdatePeriodController from "../controllers/Students/UpdateStudentController";
import express from 'express';

const periodRoutes = express.Router();

periodRoutes.get('', GetPeriodsController);
periodRoutes.post('', CreatePeriodoController);
periodRoutes.delete('/:id', DeletePeriodController);
periodRoutes.put('/:id', UpdatePeriodController);

export { periodRoutes };
