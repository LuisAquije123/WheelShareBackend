import { Router } from "express";
import { VehicleController } from "../controllers/vehicle.controller";
import { VehicleService } from "../services/vehicle.services";
import { checkJwt } from "../middleware/session";
import { logMiddleware } from "../middleware/log";

const vehicleService = new VehicleService();
const vehicleController = new VehicleController(vehicleService);
const VehicleRouter = Router();

VehicleRouter.get('/', checkJwt, logMiddleware, vehicleController.get_all.bind(vehicleController));
VehicleRouter.get('/formatted', checkJwt, logMiddleware, vehicleController.get_all_formatted.bind(vehicleController));
VehicleRouter.get('/formatted/:id', checkJwt, logMiddleware, vehicleController.get_by_id_formatted.bind(vehicleController));
VehicleRouter.get('/owner-id/:id', checkJwt, logMiddleware, vehicleController.get_by_owner_id.bind(vehicleController));
VehicleRouter.get('/owner-id-formatted/:id', checkJwt, logMiddleware, vehicleController.get_by_owner_id_formatted.bind(vehicleController));
VehicleRouter.get('/:id', checkJwt, logMiddleware, vehicleController.get_by_id.bind(vehicleController));
VehicleRouter.post('/', checkJwt, logMiddleware, vehicleController.create.bind(vehicleController));
VehicleRouter.delete('/:id', checkJwt, logMiddleware, vehicleController._delete.bind(vehicleController));

export {VehicleRouter};