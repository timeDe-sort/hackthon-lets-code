import express from 'express';
import CreateStudentAddressController from '../controllers/StudentsAddress/CreateStudentAddressController';
import DeleteStudentAddressController from '../controllers/StudentsAddress/DeleteStudentAddressController';
import GetStudentAddressController from '../controllers/StudentsAddress/GetStudentAddressController';
import UpdateStudentAddressController from '../controllers/StudentsAddress/UpdateStudentAddressController';

const studentAddressRoutes = express.Router();

studentAddressRoutes.get('', GetStudentAddressController);
studentAddressRoutes.post('', CreateStudentAddressController);
studentAddressRoutes.delete('/:id', DeleteStudentAddressController);
studentAddressRoutes.put('/:id', UpdateStudentAddressController);

export { studentAddressRoutes };
