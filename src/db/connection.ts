import "dotenv/config"
import {Sequelize} from "sequelize"

const db = new Sequelize(<string>process.env.DB_NAME, <string>process.env.DB_USER, <string>process.env.DB_PASSWORD, {
    host: <string>process.env.DB_HOST,
    dialect: 'mysql',
})
export default db;