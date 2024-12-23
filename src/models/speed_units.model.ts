import { DataTypes } from "sequelize";
import db from "../db/connection";

const speedUnitsModel = db.define('speed_units', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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

export default speedUnitsModel;