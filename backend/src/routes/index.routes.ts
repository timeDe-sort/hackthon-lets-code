import { Router } from "express";
import { donationsRoutes } from "./Danations.Routes";
import { donatorsRoutes } from "./Donators.Routes";
import { donatorAddressRoutes } from "./DonatorsAddress.Routes";
import { serviceCenterRoutes } from "./ServiceCenter.Routes";
import { serviceCenterAddressRoutes } from "./ServiceCenterAddress.Routes";
import { studentAddressRoutes } from "./StudentsAddress.Routes";
import { volunteersRoutes } from "./Volunteers.Routes";
import { volunteersAddressRoutes } from "./VolunteersAddress.Routes";
const routes = Router();

routes.use('/donations', donationsRoutes);
routes.use('/donators', donatorsRoutes);
routes.use('/donators-address', donatorAddressRoutes);
routes.use('/service-center', serviceCenterRoutes);
routes.use('/service-center-address', serviceCenterAddressRoutes);
routes.use('/students', studentAddressRoutes);
routes.use('/students-address', studentAddressRoutes);
routes.use('/volunteers', volunteersRoutes);
routes.use('/volunteers-address', volunteersAddressRoutes);

export { routes };
