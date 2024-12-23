import { DataTypes } from "sequelize";
import db from "../db/connection";

const consumptionUnitModel = db.define('consumption_units', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    symbol: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
}, 
{
    timestamps: true,
});

export default consumptionUnitModel;