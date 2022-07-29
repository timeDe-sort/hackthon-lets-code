import express from 'express';
import CreateDonatorAddressController from '../controllers/DonatorsAddress/CreateDonatorAddressController';
import DeleteDonatorsAddressController from '../controllers/DonatorsAddress/DeleteDonatorAddressController';
import GetDonatorAddressController from '../controllers/DonatorsAddress/GetDonatorAddressController';
import UpdateDonatorAddressController from '../controllers/DonatorsAddress/UpdateDonatorAddressController';

const donatorAddressRoutes = express.Router();

donatorAddressRoutes.get('', GetDonatorAddressController);
donatorAddressRoutes.post('', CreateDonatorAddressController);
donatorAddressRoutes.delete('/:id', DeleteDonatorsAddressController);
donatorAddressRoutes.put('/:id', UpdateDonatorAddressController);

export { donatorAddressRoutes };
