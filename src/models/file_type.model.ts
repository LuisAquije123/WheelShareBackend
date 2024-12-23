import {DataTypes} from 'sequelize';
import db from "../db/connection"

const fileTypeModel = db.define('file_type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    _name: {
        type: DataTypes.STRING(5),
        allowNull: false,
    },
}, 
{
    timestamps: true, 
}
);

export default fileTypeModel;