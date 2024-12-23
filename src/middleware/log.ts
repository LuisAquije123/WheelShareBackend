import {NextFunction, Request, Response} from "express"
import { RequestExt } from "../interfaces/request-ext.interface"

const logMiddleware = (req: RequestExt, res: Response, next: NextFunction) => {
    const header = req.headers;
    const currentTime = new Date();
    const userAgent = header["user-agent"];
    const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    console.log("User-Agent", userAgent);
    console.log("User ", req.user, ` requesting ${req.method} ${fullUrl} at `, currentTime);
    next();
};

export {logMiddleware}