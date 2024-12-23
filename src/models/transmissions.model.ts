import { DataTypes } from "sequelize";
import db from "../db/connection";

const transmissionsModel = db.define('transmissions', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    _name_ES: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    _name_EN: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
},
{
    timestamps: true
});

export default transmissionsModel;