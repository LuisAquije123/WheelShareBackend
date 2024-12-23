import { DataTypes } from "sequelize";
import db from "../db/connection";

const carClassesModel = db.define('car_classes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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

export default carClassesModel;