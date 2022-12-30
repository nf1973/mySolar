import Sequelize from "sequelize";
import {} from "dotenv/config";

const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;

const db = new Sequelize("mysolar", MYSQL_USER, MYSQL_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default db;
