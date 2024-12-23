import { Request, Response } from "express";
import { getAll, getById, getByTenantId, create, update, _delete } from "../services/rent.services";

const GetAll = async(req: Request, res: Response) => {
    try {
        const response = await getAll();
        res.send(response);
    } catch(error) {
        res.status(500);
        res.send(error);
    }
}

const GetById = async({params}: Request, res: Response) => {
    try {
        const {id} = params
        const response = await getById(id);
        if (response == "RENT_NOT_FOUND") res.status(404); 
        res.send(response);
    } catch(error) {
        res.status(500)
        res.send(error)
    }
}

const GetByTenantId = async({params}: Request, res: Response) => {
    try {
        const {id} = params
        const response = await getByTenantId(id);
        if (response == "TENANT_NOT_FOUND") res.status(404);
        res.send(response);
    } catch(error) {
        res.status(500);
        res.send(error)
    }
}

const PostRent = async({body}: Request, res: Response) => {
    try {
        const response = await create(body);
        res.send(response);
    } catch(error) {
        res.status(500);
        res.send(error)
    }
}

const UpdateRent = async({params, body}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await update(body, id);
        res.send(response)
    } catch(error) {
        res.status(500)
        res.send(error);
    }
}

const DeleteRent = async({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await _delete(id);
        res.send(response);
    } catch(error){
        res.status(500)
        res.send(error)
    }
}

export {GetAll, GetById, GetByTenantId, PostRent, UpdateRent, DeleteRent};