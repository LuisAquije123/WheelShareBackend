import {Request, Response} from "express";
import { UserService } from "../services/user.services";

class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async get_all (req: Request, res: Response) {
        try {
            const response = await this.userService.get_all();
            res.send(response);
        } catch(error) {
            res.status(500)
            res.send(error)
        }
    }
    
    async get_by_id ({params}: Request, res: Response) {
        try {
            const {id} = params;
            const response = await this.userService.get_by_id(id);
            if (response == "USER_NOT_FOUND") res.status(404);
            res.send(response);
        } catch(error) {
            res.status(404)
            res.send(error)
        }
    }
    
    async update ({params, body}: Request, res: Response) {
        try {
            const {id} = params;
            const response  = await this.userService.update(body, id);
            res.send(response);
        } catch(error) {
            res.status(500)
            res.send(error)
        }
    }
    
    async delete ({params}: Request, res: Response) {
        try {
            const {id} = params;
            const response = await this.userService._delete(id);
            res.send(response)
        } catch(error) {
            res.status(500)
            res.send(error)
        }
    }
}

export {UserController};