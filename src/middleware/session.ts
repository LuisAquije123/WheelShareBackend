import { Request, NextFunction, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/request-ext.interface";
import { User } from "../interfaces/user.interface";
import { Payload } from "../interfaces/payload.interface";
import { JwtPayload } from "jsonwebtoken";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization;
        const jwt = jwtByUser?.split(' ').pop();
        const payload = verifyToken(`${jwt}`) as JwtPayload;
        if (!payload) {
            res.status(401);
            res.send("JWT_INVALID") 
        } else if (payload.role !== 'admin' && payload.role !== 'tenant' && payload.role !== 'owner') {
            res.status(401);
            res.send('UNAUTHORIZED') 
        } else {
            req.user = payload;
            next();
        }
    } catch(e) {
        res.status(400);
        res.send('SOMETHING_WENT_WRONG');
    }
}

const checkJwtAdmin = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || ' '
        const jwt = jwtByUser.split(' ').pop();
        const payload = verifyToken(`${jwt}`) as JwtPayload
        if (!payload) {
            res.status(401);
            res.send("JWT_INVALID")  
        } else if (payload.role !== 'admin') {
            res.status(401);
            res.send("UNAUTHORIZED") 
        }
        else {
            req.user = payload;
            next();
        }
    } catch (e) {
        res.status(400)
        res.send('SOMETHING_WENT_WRONG')
    }
}

export {checkJwt, checkJwtAdmin}