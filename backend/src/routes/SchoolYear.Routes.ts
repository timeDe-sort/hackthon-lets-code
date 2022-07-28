import express from 'express';
import CreateSchoolYearController from "../controllers/SchoolYear/CreateSchoolYearController";
import DeleteSchoolYearController from '../controllers/SchoolYear/DeleteSchoolYearController';
import GetSchoolYearsController from '../controllers/SchoolYear/GetSchoolYearsController';
import UpdateSchoolYearController from '../controllers/SchoolYear/UpdateSchoolYearController';

const schoolYearRoutes = express.Router();

schoolYearRoutes.get('', GetSchoolYearsController);
schoolYearRoutes.post('', CreateSchoolYearController);
schoolYearRoutes.delete('/:id', DeleteSchoolYearController);
schoolYearRoutes.put('/:id', UpdateSchoolYearController);

export { schoolYearRoutes };
