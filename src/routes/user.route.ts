import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.services";
import { checkJwt } from "../middleware/session";
import { logMiddleware } from "../middleware/log";

const userService = new UserService();
const userController = new UserController(userService);
const UserRouter = Router();

UserRouter.get('/', checkJwt, logMiddleware, userController.get_all.bind(userController));
UserRouter.get('/:id', checkJwt, logMiddleware, userController.get_by_id.bind(userController));
UserRouter.put('/:id', checkJwt, logMiddleware, userController.update.bind(userController));
UserRouter.delete('/:id', checkJwt, logMiddleware, userController.delete.bind(userController));

export { UserRouter };