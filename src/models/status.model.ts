import {DataTypes} from 'sequelize';
import db from "../db/connection"

const statusModel = db.define('_status', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    _name: {
        type: DataTypes.STRING(6),
        allowNull: false,
    }
}, 
{
    timestamps: true,
}
);

export default statusModel;