import { Router } from "express";
import { checkJwt } from "../middleware/session";
import { logMiddleware } from "../middleware/log";
import { DeleteRent, GetAll, GetById, GetByTenantId, PostRent, UpdateRent } from "../controllers/rent.controller";

const RentRouter = Router();

RentRouter.get('/', checkJwt, logMiddleware, GetAll);
RentRouter.get('/tenant/:id', checkJwt, logMiddleware, GetByTenantId);
RentRouter.get('/:id', checkJwt, logMiddleware, GetById);
RentRouter.post('/', checkJwt, logMiddleware, PostRent);
RentRouter.put('/:id', checkJwt, logMiddleware, UpdateRent);
RentRouter.delete('/:id', checkJwt, logMiddleware, DeleteRent);

export {RentRouter}