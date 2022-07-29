import express from 'express';
import CreateServiceCenterAddresController from '../controllers/ServiceCenterAddress/CreateServiceCenterAddressController';
import DeleteServiceCenterAddressController from '../controllers/ServiceCenterAddress/DeleteServiceCenterAddressController';
import GetServiceCenterAddressController from '../controllers/ServiceCenterAddress/GetServiceCenterAddressController';
import UpdateServiceCenterAddressController from '../controllers/ServiceCenterAddress/UpdateServiceCenterAddressController';

const serviceCenterAddressRoutes = express.Router();

serviceCenterAddressRoutes.get('', GetServiceCenterAddressController);
serviceCenterAddressRoutes.post('', CreateServiceCenterAddresController);
serviceCenterAddressRoutes.delete('/:id', DeleteServiceCenterAddressController);
serviceCenterAddressRoutes.put('/:id', UpdateServiceCenterAddressController);

export { serviceCenterAddressRoutes };
