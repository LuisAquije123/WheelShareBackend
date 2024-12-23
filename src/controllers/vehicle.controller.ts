import { Request, Response } from "express";
import { VehicleService } from "../services/vehicle.services";

class VehicleController {
    private vehicleService: VehicleService;

    constructor(vehicleService: VehicleService) {
        this.vehicleService = vehicleService;
    }

    async get_all(req: Request, res: Response){
        try {
            const response = await this.vehicleService.get_all();
            res.send(response);
        } catch(e) {
            res.status(500);
            res.send(e)
        }
    }

    async get_all_formatted(req: Request, res: Response) {
        try {
            const response = await this.vehicleService.get_all_formatted();
            res.send(response);
        } catch (e) {
            res.status(500);
            res.send(e)
        }
    }

    async get_by_id({params}: Request, res: Response) {
        try {
            const {id} = params;
            const response = await this.vehicleService.get_by_id(id);
            if (response == "VEHICLE_NOT_FOUND") res.status(404);
            res.send(response);
        } catch(e) {
            res.status(500);
            res.send(e);
        }
    }

    async get_by_id_formatted({params}: Request, res: Response) {
        try {
            const {id} = params;
            const response  = await this.vehicleService.get_by_id_formatted(id);
            if (response == "VEHICLE_NOT_FOUND") res.status(404);
            res.send(response);
        } catch(e) {
            res.status(500);
            res.send(e);
        }
    }

    async get_by_owner_id({params}: Request, res: Response) {
        try {
            const {id} = params;
            const response = await this.vehicleService.get_by_owner_id(id);
            if (response == "USER_NOT_FOUND") res.status(404);
            if (response == "VEHICLE_NOT_FOUND") res.status(404);
            res.send(response);
        } catch(e) {
            res.status(500);
            res.send(e);
        }
    }

    async get_by_owner_id_formatted({params}: Request, res: Response) {
        try {
            const {id} = params;
            const response = await this.vehicleService.get_by_owner_id_formatted(id);
            if (response == "USER_NOT_FOUND") res.status(404);
            if (response == "VEHICLE_NOT_FOUND") res.status(404);
            res.send(response);
        } catch(e) {
            res.status(500);
            res.send(e);
        }
    }

    async create({body}: Request, res: Response) {
        try {
            const response = await this.vehicleService.create(body);
            res.send(response);
        } catch(e) {
            res.status(500);
            console.log(e);
            res.send(e);
        }
    }

    async _delete({params}: Request, res: Response) {
        try {
            const {id} = params;
            const response = await this.vehicleService._delete(id);
            if (response == "VEHICLE_NOT_FOUND") res.status(404);
            res.send(response);
        } catch(e) {
            res.status(500);
            res.send(e);
        }
    }
}

export { VehicleController }