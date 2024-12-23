import { DataTypes } from "sequelize";
import db from "../db/connection";

const weightModel = db.define('weight', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    weight: {
        type: DataTypes.DOUBLE(6,2),
        allowNull: false
    },
    weight_units_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'weight_units',
            key: 'id'
        }
    }
},
{
    timestamps: true,
    freezeTableName: true
});

export default weightModel;