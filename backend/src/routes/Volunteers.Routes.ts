import express from 'express';
import CreateVolunteerController from '../controllers/Volunteers/CreateVolunteerController';
import DeleteVolunteerController from '../controllers/Volunteers/DeleteVolunteerController';
import GetVolunteersController from '../controllers/Volunteers/GetVolunteerController';
import UpdateVolunteerController from '../controllers/Volunteers/UpdateVolunteerController';

const volunteersRoutes = express.Router();

volunteersRoutes.get('', GetVolunteersController);
volunteersRoutes.post('', CreateVolunteerController);
volunteersRoutes.delete('/:id', DeleteVolunteerController);
volunteersRoutes.put('/:id', UpdateVolunteerController);

export { volunteersRoutes };
