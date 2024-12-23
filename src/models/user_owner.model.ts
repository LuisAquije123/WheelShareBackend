import {DataTypes} from 'sequelize';
import db from "../db/connection";

const userOwnerModel = db.define('user_owner', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    users_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: 'id'
        }
    }
},
{
    timestamps: true,
    freezeTableName: true
});

export default userOwnerModel;