import { DataTypes } from "sequelize";
import db from "../db/connection";

const measurementsUnitModel = db.define('measurement_units', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    symbol: {
        type: DataTypes.STRING(5),
        allowNull: false
    }
},
{
    timestamps: true
});

export default measurementsUnitModel;