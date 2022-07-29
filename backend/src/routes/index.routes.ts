import { Router } from "express";
import CreateDonatorController from "../controllers/Donators/CreateDonatorController";
import DeleteDonatorsController from "../controllers/Donators/DeleteDonatorController";
import GetDonatorController from "../controllers/Donators/GetDonatorController";
import UpdateDonatorController from "../controllers/Donators/UpdateDonatorController";

const routes = Router();

routes.get('/donators', GetDonatorController);
routes.post('/donators', CreateDonatorController);
routes.delete('/donators/:id', DeleteDonatorsController);
routes.put('/donators/:id', UpdateDonatorController);

// routes.use('/donations', donationsRoutes);
// routes.use('/donators-address', donatorAddressRoutes);
// routes.use('/service-center', serviceCenterRoutes);
// routes.use('/service-center-address', serviceCenterAddressRoutes);
// routes.use('/students', studentAddressRoutes);
// routes.use('/students-address', studentAddressRoutes);
// routes.use('/volunteers', volunteersRoutes);
// routes.use('/volunteers-address', volunteersAddressRoutes);

export { routes };
