import MaintenanceModel from "../models/maintenance.model";
import { Maintenance } from "../interfaces/maintenance.interface";

const getAll = async() => {
    const response = await MaintenanceModel.findAll();
    return response;
}

const create = async(maintenance: Maintenance) => {
    const response = await MaintenanceModel.create({
        TypeProblem: maintenance.TypeProblem,
        Title: maintenance.Title,
        Description: maintenance.Description,
        TenantId: maintenance.TenantId,
        OwnerId: maintenance.OwnerId,
        IsActive: 1
    })
    return response;
}

const getById = async(id: string) => {
    const response = await MaintenanceModel.findByPk(id);
    if (!response) return "MAINTENANCE_NOT_FOUND";
    return response;
}

export {getAll, create, getById}