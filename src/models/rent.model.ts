import { DataTypes } from 'sequelize';
import db from "../db/connection";

const RentModel = db.define('Rents', {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  Status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  StartDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  EndDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  VehicleId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  OwnerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  TenantId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  PickUpPlace: {
    type: DataTypes.STRING,
    allowNull: false
  },
  IsActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

export default RentModel;