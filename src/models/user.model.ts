import {DataTypes} from 'sequelize';
import db from "../db/connection"

const userModel = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    _name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    first_surname: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    second_surname: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    cellphone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    code_cellphone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gmail: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    _password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},
{
    timestamps: true,
});

export default userModel;