import { DataTypes } from 'sequelize';
import db from "../db/connection";

const fileModel = db.define('files', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    file_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'file_type',
            key: 'id', 
        },
    },
    url_file: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    users_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    }
}, 
{
    timestamps: true,
});

export default fileModel;
