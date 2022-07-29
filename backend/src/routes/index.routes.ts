import { Router } from "express";
import CreateDonationsController from "../controllers/Donations/CreateDonationsController";
import DeleteDonationsController from "../controllers/Donations/DeleteDonationsController";
import GetDonationsController from "../controllers/Donations/GetDonationsController";
import UpdateDonationController from "../controllers/Donations/UpdateDonationsController";
import CreateDonatorController from "../controllers/Donators/CreateDonatorController";
import DeleteDonatorsController from "../controllers/Donators/DeleteDonatorController";
import GetDonatorController from "../controllers/Donators/GetDonatorController";
import UpdateDonatorController from "../controllers/Donators/UpdateDonatorController";
import CreateDonatorAddressController from "../controllers/DonatorsAddress/CreateDonatorAddressController";
import DeleteDonatorsAddressController from "../controllers/DonatorsAddress/DeleteDonatorAddressController";
import GetDonatorAddressController from "../controllers/DonatorsAddress/GetDonatorAddressController";
import UpdateDonatorAddressController from "../controllers/DonatorsAddress/UpdateDonatorAddressController";
import DeleteServiceCenterController from "../controllers/ServiceCenter/DeleteServiceCenterController";
import GetServiceCenterController from "../controllers/ServiceCenter/GetServiceCenterController";
import UpdateServiceCenterController from "../controllers/ServiceCenter/UpdateServiceCenterController";
import CreateServiceCenterAddresController from "../controllers/ServiceCenterAddress/CreateServiceCenterAddressController";
import DeleteServiceCenterAddressController from "../controllers/ServiceCenterAddress/DeleteServiceCenterAddressController";
import GetServiceCenterAddressController from "../controllers/ServiceCenterAddress/GetServiceCenterAddressController";
import UpdateServiceCenterAddressController from "../controllers/ServiceCenterAddress/UpdateServiceCenterAddressController";
import CreateStudentsController from "../controllers/Students/CreateStudentController";
import DeleteStudentController from "../controllers/Students/DeleteStudentController";
import GetStudentsController from "../controllers/Students/GetStudentController";
import UpdateStudentController from "../controllers/Students/UpdateStudentController";
import CreateStudentAddressController from "../controllers/StudentsAddress/CreateStudentAddressController";
import DeleteStudentAddressController from "../controllers/StudentsAddress/DeleteStudentAddressController";
import GetStudentAddressController from "../controllers/StudentsAddress/GetStudentAddressController";
import UpdateStudentAddressController from "../controllers/StudentsAddress/UpdateStudentAddressController";
import CreateVolunteerController from "../controllers/Volunteers/CreateVolunteerController";
import DeleteVolunteerController from "../controllers/Volunteers/DeleteVolunteerController";
import GetVolunteersController from "../controllers/Volunteers/GetVolunteerController";
import UpdateVolunteerController from "../controllers/Volunteers/UpdateVolunteerController";
import CreateVolunteerAddressController from "../controllers/VolunteersAddress/CreateVolunteerAddressController";
import DeleteVolunteerAddressController from "../controllers/VolunteersAddress/DeleteVolunteerAddressController";
import GetVolunteerAddressController from "../controllers/VolunteersAddress/GetVolunteerAddressController";
import UpdateVolunteerAddressController from "../controllers/VolunteersAddress/UpdateVolunteerAddressController";

const routes = Router();

routes.get('/donators', GetDonatorController);
routes.post('/donators', CreateDonatorController);
routes.delete('/donators/:id', DeleteDonatorsController);
routes.put('/donators/:id', UpdateDonatorController);

routes.get('/donations', GetDonationsController);
routes.post('/donations', CreateDonationsController);
routes.delete('/donations/:id', DeleteDonationsController);
routes.put('/donations/:id', UpdateDonationController);

routes.get('/donators-address', GetDonatorAddressController);
routes.post('/donators-address', CreateDonatorAddressController);
routes.delete('/donators-address/:id', DeleteDonatorsAddressController);
routes.put('/donators-address/:id', UpdateDonatorAddressController);

routes.get('/service-center', GetServiceCenterController);
routes.post('/service-center', CreateServiceCenterAddresController);
routes.delete('/service-center/:id', DeleteServiceCenterController);
routes.put('/service-center/:id', UpdateServiceCenterController);

routes.get('/service-center-address', GetServiceCenterAddressController);
routes.post('/service-center-address', CreateServiceCenterAddresController);
routes.delete('/service-center-address/:id', DeleteServiceCenterAddressController);
routes.put('/service-center-address/:id', UpdateServiceCenterAddressController);

routes.get('/students', GetStudentsController);
routes.post('/students', CreateStudentsController);
routes.delete('/students/:id', DeleteStudentController);
routes.put('/students/:id', UpdateStudentController);

routes.get('/students-address', GetStudentAddressController);
routes.post('/students-address', CreateStudentAddressController);
routes.delete('/students-address/:id', DeleteStudentAddressController);
routes.put('/students-address/:id', UpdateStudentAddressController);

routes.get('/volunteers', GetVolunteersController);
routes.post('/volunteers', CreateVolunteerController);
routes.delete('/volunteers/:id', DeleteVolunteerController);
routes.put('/volunteers/:id', UpdateVolunteerController);

routes.get('/volunteers-address', GetVolunteerAddressController);
routes.post('/volunteers-address', CreateVolunteerAddressController);
routes.delete('/volunteers-address/:id', DeleteVolunteerAddressController);
routes.put('/volunteers-address/:id', UpdateVolunteerAddressController);

export { routes };
