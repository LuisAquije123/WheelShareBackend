import {Request, Response} from "express";
import { AuthService } from "../services/auth.services";

class AuthController {
    private authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    async register_owner({body}: Request, res: Response) {
        const response = await this.authService.register_owner(body);
        res.send(response);
    }

    async register_tenant({body}: Request, res: Response) {
        const response = await this.authService.register_tenant(body);
        res.send(response);
    }

    async register ({body}: Request, res: Response) {
        const response = await this.authService.register(body);
        res.send(response);
    }
    
    async login ({body}: Request, res: Response){
        const response = await this.authService.login(body);
        res.send(response)
    }
}



export {AuthController};