import express from 'express';
import CreateServiceCenterController from '../controllers/ServiceCenter/CreateServiceCenterController';
import DeleteServiceCenterController from '../controllers/ServiceCenter/DeleteServiceCenterController';
import GetServiceCenterController from '../controllers/ServiceCenter/GetServiceCenterController';
import UpdateServiceCenterController from '../controllers/ServiceCenter/UpdateServiceCenterController';

const serviceCenterRoutes = express.Router();

serviceCenterRoutes.get('', GetServiceCenterController);
serviceCenterRoutes.post('', CreateServiceCenterController);
serviceCenterRoutes.delete('/:id', DeleteServiceCenterController);
serviceCenterRoutes.put('/:id', UpdateServiceCenterController);

export { serviceCenterRoutes };
