import { Router } from "express";
import { GetAll, GetById, PostMaintenance } from "../controllers/maintenance.controller";
import { checkJwt } from "../middleware/session";
import { logMiddleware } from "../middleware/log";

const MaintenanceRouter = Router();

MaintenanceRouter.get('/', checkJwt, logMiddleware, GetAll);
MaintenanceRouter.post('/', checkJwt, logMiddleware, PostMaintenance);
MaintenanceRouter.get('/:id', checkJwt, logMiddleware, GetById);

export {MaintenanceRouter};
