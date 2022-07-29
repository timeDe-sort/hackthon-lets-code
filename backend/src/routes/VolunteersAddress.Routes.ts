import express from 'express';
import CreateVolunteerAddressController from '../controllers/VolunteersAddress/CreateVolunteerAddressController';
import DeleteVolunteerAddressController from '../controllers/VolunteersAddress/DeleteVolunteerAddressController';
import GetVolunteerAddressController from '../controllers/VolunteersAddress/GetVolunteerAddressController';
import UpdateVolunteerAddressController from '../controllers/VolunteersAddress/UpdateVolunteerAddressController';

const volunteersAddressRoutes = express.Router();

volunteersAddressRoutes.get('', GetVolunteerAddressController);
volunteersAddressRoutes.post('', CreateVolunteerAddressController);
volunteersAddressRoutes.delete('/:id', DeleteVolunteerAddressController);
volunteersAddressRoutes.put('/:id', UpdateVolunteerAddressController);

export { volunteersAddressRoutes };
