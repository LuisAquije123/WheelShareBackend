import {Router} from "express"
import { AuthController } from "../controllers/auth.controller"
import { AuthService } from "../services/auth.services";

const authService = new AuthService();
const authController = new AuthController(authService);
const AuthRouter = Router();

AuthRouter.post("/register-tenant", authController.register_tenant.bind(authController));
AuthRouter.post("/register-owner", authController.register_owner.bind(authController));
AuthRouter.post("/login", authController.login.bind(authController));

export {AuthRouter}