import { DataTypes } from "sequelize";
import db from "../db/connection";

const measurementsModel = db.define('measurements', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    length: {
        type: DataTypes.DOUBLE(5,2),
        allowNull: false
    },
    width: {
        type: DataTypes.DOUBLE(5,2),
        allowNull: false
    },
    height: {
        type: DataTypes.DOUBLE(5,2),
        allowNull: false
    },
    measurement_units_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'measurement_units',
            key: 'id'
        }
    }
},
{
    timestamps: true
});

export default measurementsModel;