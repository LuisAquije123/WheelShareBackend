import express, { Router } from "express";
import { logMiddleware } from "../middleware/log";
import { checkJwt } from "../middleware/session";
import { GetFile } from "../controllers/upload.controller";
import path from "path"
import multerMiddleware from "../middleware/file";

const FileRouter = Router();

FileRouter.post("/", checkJwt, logMiddleware, multerMiddleware.single("myfile"), GetFile);
FileRouter.use("/storage", express.static(path.join(__dirname, '../../storage')));

export {FileRouter};