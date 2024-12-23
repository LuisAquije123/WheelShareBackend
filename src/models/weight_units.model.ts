import { DataTypes } from "sequelize";
import db from "../db/connection";

const weightUnitsModel = db.define('weight_units', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    symbol_ES: {
        type: DataTypes.STRING(5),
        allowNull: false
    },
    symbol_EN: {
        type: DataTypes.STRING(5),
        allowNull: false
    }
},
{
    timestamps: true
});

export default weightUnitsModel;