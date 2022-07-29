import express from 'express';
import CreateSchoolYearController from "../controllers/Donators/CreateDonatorController";
import DeleteSchoolYearController from '../controllers/Donators/DeleteDonatorController';
import GetSchoolYearsController from '../controllers/Donators/GetDonatorController';
import UpdateSchoolYearController from '../controllers/Donators/UpdateDonatorController';

const schoolYearRoutes = express.Router();

schoolYearRoutes.get('', GetSchoolYearsController);
schoolYearRoutes.post('', CreateSchoolYearController);
schoolYearRoutes.delete('/:id', DeleteSchoolYearController);
schoolYearRoutes.put('/:id', UpdateSchoolYearController);

export { schoolYearRoutes };
