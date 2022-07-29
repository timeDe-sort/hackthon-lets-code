import express from 'express';
import CreateDonatorController from '../controllers/Donators/CreateDonatorController';
import DeleteDonatorsController from '../controllers/Donators/DeleteDonatorController';
import GetDonatorController from '../controllers/Donators/GetDonatorController';
import UpdateDonatorController from '../controllers/Donators/UpdateDonatorController';

const donatorsRoutes = express.Router();

donatorsRoutes.get('', GetDonatorController);
donatorsRoutes.post('', CreateDonatorController);
donatorsRoutes.delete('/:id', DeleteDonatorsController);
donatorsRoutes.put('/:id', UpdateDonatorController);

export { donatorsRoutes };
