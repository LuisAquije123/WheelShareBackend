import db from "../db/connection";
import { DataTypes } from "sequelize";

const MaintenanceModel = db.define('Maintenances', {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    TypeProblem: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TenantId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OwnerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
});
export default MaintenanceModel;