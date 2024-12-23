import { DataTypes } from "sequelize";
import db from "../db/connection";

const consumptionsModel = db.define('consumptions', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    _value: {
        type: DataTypes.DOUBLE(5,2),
        allowNull: false
    },
    consumption_units_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'consumption_units',
            key: 'id'
        }
    }
},
{
    timestamps: true
});

export default consumptionsModel;