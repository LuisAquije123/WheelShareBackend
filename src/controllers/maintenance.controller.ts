import { getAll, create, getById } from "../services/maintenance.services";
import {Request, Response} from "express"

const GetAll = async(req: Request, res: Response) => {
    try {
        const response = await getAll()
        res.send(response);
    } catch(error) {
        res.status(500)
        res.send(error)
    }
}

const PostMaintenance = async({body}: Request, res: Response) => {
    try {
        const response = await create(body);
        res.send(response);
    } catch(error) {
        res.status(500);
        res.send(error)
    }
}

const GetById = async({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await getById(id)
        res.send(response);
    } catch(error){
        res.status(500)
        res.send(error);
    }
}

export {GetAll, PostMaintenance, GetById}