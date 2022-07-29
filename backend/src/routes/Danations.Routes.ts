import express from 'express';
import CreateDonationsController from '../controllers/Donations/CreateDonationsController';
import DeleteDonationsController from '../controllers/Donations/DeleteDonationsController';
import GetDonationsController from '../controllers/Donations/GetDonationsController';
import UpdateDonationController from '../controllers/Donations/UpdateDonationsController';

const donationsRoutes = express.Router();

donationsRoutes.get('', GetDonationsController);
donationsRoutes.post('', CreateDonationsController);
donationsRoutes.delete('/:id', DeleteDonationsController);
donationsRoutes.put('/:id', UpdateDonationController);

export { donationsRoutes };
