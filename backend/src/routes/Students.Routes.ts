import express from 'express';
import CreateStudentsController from '../controllers/Students/CreateStudentController';
import DeleteStudentController from '../controllers/Students/DeleteStudentController';
import GetStudentsController from '../controllers/Students/GetStudentController';
import UpdateStudentController from '../controllers/Students/UpdateStudentController';

const studentsRoutes = express.Router();

studentsRoutes.get('', GetStudentsController);
studentsRoutes.post('', CreateStudentsController);
studentsRoutes.delete('/:id', DeleteStudentController);
studentsRoutes.put('/:id', UpdateStudentController);

export { studentsRoutes };
