import { DataTypes } from "sequelize";
import db from "../db/connection";

const speedsModel = db.define('speeds', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    _value: {
        type: DataTypes.DOUBLE(6,2),
        allowNull: false
    },
    speed_units_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'speed_units',
            key: 'id'
        }
    }
}, 
{
    timestamps: true
});

export default speedsModel;