import {Router} from 'express';
import { AuthRouter } from './auth.route';
import { UserRouter } from './user.route';
import {VehicleRouter} from './vehicle.route';
import { RentRouter } from './rent.route';
import { MaintenanceRouter } from './maintenance.route';
import { FileRouter } from './file.route';

const router = Router();

router.use("/auth", AuthRouter);
router.use("/users", UserRouter);
router.use("/vehicles", VehicleRouter);
router.use("/rents", RentRouter);
router.use("/maintenances", MaintenanceRouter);
router.use("/file", FileRouter);

export { router };