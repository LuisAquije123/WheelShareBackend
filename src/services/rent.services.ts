import RentModel from "../models/rent.model";
import { Rent } from "../interfaces/rent.interface";

const getAll = async() => {
    const response = await RentModel.findAll();
    return response;
}

const getById = async(id: string) => {
    const response = await RentModel.findByPk(id);
    if (!response) return "RENT_NOT_FOUND"
    return response;
}

const getByTenantId = async(id: string) => {
    const response = await RentModel.findAll({where: {TenantId: id}});
    if (!response) return "TENANT_NOT_FOUND"
    return response;
}

const create = async(rent: Rent) => {
    const response = await RentModel.create({
        Status: rent.Status,
        StartDate: rent.StartDate,
        EndDate: rent.EndDate,
        VehicleId: rent.VehicleId,
        OwnerId: rent.OwnerId,
        TenantId: rent.TenantId,
        PickUpPlace: rent.PickUpPlace,
        IsActive: 1
    })
    return response;
}

const update = async(rent: Rent, id: string) => {
    const rentExists = await RentModel.findByPk(id)
    if (!rentExists) return "RENT_NOT_FOUND"
    const response = await rentExists.update(rent);
    return response;
}

const _delete = async(id: string) => {
    const rentExists = await RentModel.findByPk(id);
    if (!rentExists) return "RENT_NOT_FOUND"
    const response = await rentExists.destroy();
    return response;
}

export {getAll, getById, getByTenantId, create, update, _delete}