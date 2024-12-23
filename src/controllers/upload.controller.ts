import { NextFunction, Response } from "express";
import { RequestExt } from "../interfaces/request-ext.interface";

const GetFile = async(req: RequestExt, res: Response) => {
    try {
        const {file} = req;
        if (!file){
            res.status(400)
            res.send("No file uploaded");
            return;
        }
        const relativePath = `${file.filename}`;
        res.send(relativePath)
    } catch(error) {
        res.status(500)
        res.send("UPLOAD_FAILED")
    }
}

export {GetFile}